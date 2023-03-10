const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se handlerElephant é uma função', () => {
    expect(typeof handlerElephants).toEqual('function');
  });
  it('ao receber `count` como parâmetro, retorna a quantidade de elefentas', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('ao receber `names` como parâmetro, retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('ao receber `averageAge` como parâmetro, retorna a média de idade dos elefantas', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 1);
  });
  it('ao receber `location` como parâmetro, reotrna a localização dos elefentas dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('ao receber `popularity` como parâmetro, retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('ao receber `availability` como parâmetro, retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('ao não receber nenhum parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('ao receber um objeto vazio `{}` retorna a string `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('ao receber uma string que não contempla uma funcionalidade retorna `null`', () => {
    expect(handlerElephants('chocolate')).toBeNull();
  });
});
