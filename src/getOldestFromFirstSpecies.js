const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstSpecieId = employees
    .find((element) => element.id === id).responsibleFor[0];
  const OlderFromSpecie = species
    .find((element) => element.id === firstSpecieId).residents
    .reduce((acc, sum) => (acc.age > sum.age ? acc : sum));
  return (Object.values(OlderFromSpecie));
};

module.exports = getOldestFromFirstSpecies;
