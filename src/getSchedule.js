const { species } = require('../data/zoo_data');

const targetNames = (scheduleTarget) => {
  const names = species.map((element) => element.name);
  return names.some((element) => element === scheduleTarget);
};

const getSchedule = (scheduleTarget) => {
  if (targetNames(scheduleTarget)) {
    return species
      .filter((element) => element.name === scheduleTarget)
      .map((element) => element.availability)[0];
  }
  if (targetDays(scheduleTarget)) {
    return 'x';
}};

module.exports = getSchedule;

console.log(getSchedule('lions'));
