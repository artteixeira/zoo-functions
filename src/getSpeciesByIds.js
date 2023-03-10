const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  species.filter((element) => ids.find((id) => id === element.id));

module.exports = getSpeciesByIds;
