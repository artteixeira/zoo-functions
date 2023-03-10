const { species } = require('../data/zoo_data');

const animalWithSex = (animal) => {
  const { species: name, sex } = animal;
  const specie = species.find((element) => element.name === name);
  return specie.residents.filter((resident) => resident.sex === sex).length;
};

const animalWithName = (animal) => {
  const { species: name } = animal;
  const specie = species.find((element) => element.name === name);
  return specie.residents.length;
};

const animals = species.reduce((acc, y) => {
  acc[y.name] = y.residents.length;
  return acc;
}, {});

const countAnimals = (animal) => {
  if (animal === undefined) return animals;
  const { species: name, sex } = animal;
  if (sex !== undefined) return animalWithSex(animal);
  if (name !== undefined) return animalWithName(animal);
};

module.exports = countAnimals;
