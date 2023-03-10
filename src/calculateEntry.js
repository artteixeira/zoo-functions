const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.reduce((acc, cur) => {
    acc.child = entrants.filter((element) => element.age < 18).length;
    return acc;
  }, {});

  const adult = entrants.reduce((acc, cur) => {
    acc.adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
    return acc;
  }, {});

  const senior = entrants.reduce((acc, cur) => {
    acc.senior = entrants.filter((element) => element.age >= 50).length;
    return acc;
  }, {});

  const result = Object.assign(child, adult, senior);
  return result;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) return 0;
  const prices = [20.99, 49.99, 24.99];
  return Object.values(countEntrants(entrants))
    .reduce((acc, cur, index) => acc + (cur * prices[index]), 0);
};

module.exports = { calculateEntry, countEntrants };

const xd = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(xd));
