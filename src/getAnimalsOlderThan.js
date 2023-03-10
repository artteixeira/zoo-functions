const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalSpecie = species.filter((element) => element.name === animal);
  return animalSpecie[0].residents.every((element) => element.age >= age);
};

module.exports = getAnimalsOlderThan;
