const { species } = require('../data/zoo_data');

const getLocations = () => {
  const loc = species.map((element) => element.location);
  const locCorrect = loc.filter((element, index) => loc.indexOf(element) === index);
  return locCorrect.reduce((acc, arg) => {
    acc[arg] = [];
    return acc;
  }, {});
};

const getAnimalMap = (options) => {};

module.exports = getAnimalMap;
