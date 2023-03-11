const { employees, species } = require('../data/zoo_data');

const checkExistent = (args) => {
  const { name, id } = args;
  return employees.some(
    (element) =>
      element.firstName === name || element.lastName === name
      || element.id === id,
  );
};

const findEmployee = (args) => {
  const { name, id } = args;
  const xd = employees.find(
    (element) =>
      element.firstName === name || element.lastName === name
      || element.id === id,
  );
  return xd;
};

const getLocations = (args) => {
  const employee = findEmployee(args);
  const speciesInfo = species
    .filter((element) => employee.responsibleFor.includes(element.id));
  return speciesInfo.map((element) => element.location);
};

const getSpeciesName = (args) => {
  const employee = findEmployee(args);
  const speciesInfo = species
    .filter((element) => employee.responsibleFor.includes(element.id));
  return speciesInfo.map((element) => element.name);
};

const infosEmployee = (args) => {
  const employee = findEmployee(args);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpeciesName(args),
    locations: getLocations(args),
  };
};

const getEmployeesCoverage = (args) => {
  if (args !== undefined) {
    if (!checkExistent(args)) {
      throw new Error('Informações inválidas');
    }
    if (checkExistent(args)) {
      return infosEmployee(args);
    }
  }
  const names = employees.map((element) => ({ name: element.firstName }));
  return names.map((element) => infosEmployee(element));
};

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage());
