const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) { return {}; }
  return employees
    .find((element) => element.firstName === employeeName || element.lastName === employeeName);
};

module.exports = getEmployeeByName;
