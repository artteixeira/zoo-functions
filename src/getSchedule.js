const { species, hours } = require('../data/zoo_data');

const targetNames = (scheduleTarget) => {
  const names = species.map((element) => element.name);
  return names.some((element) => element === scheduleTarget);
};

const exhibition = (scheduleTarget) => species
  .filter((element) => element.availability
    .includes(scheduleTarget))
  .map((element) => element.name);

const getInfos = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return {
    officeHour: `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
    exhibition: exhibition(scheduleTarget),
  };
};

const targetDays = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return { [scheduleTarget]: { ...getInfos(scheduleTarget) },
    };
  }
  return { [scheduleTarget]: { ...getInfos(scheduleTarget) } };
};

const getSchedule = (scheduleTarget) => {
  const names = Object.keys(hours);

  if (targetNames(scheduleTarget)) {
    return species
      .filter((element) => element.name === scheduleTarget)
      .map((element) => element.availability)[0];
  }
  if (names.includes(scheduleTarget)) {
    return targetDays(scheduleTarget);
  }
  const newObj = {};
  names.forEach(
    (element) => {
      newObj[element] = getInfos(element);
    },
  );
  return newObj;
};

module.exports = getSchedule;

console.log(getSchedule());
