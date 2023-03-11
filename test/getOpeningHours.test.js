const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const opened = 'The zoo is open';

  it('Testa não passando argumentos. Deverá retornar um objeto contendo os dias e os horários de abertura e fechamento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se ao receber os argumentos `Monday` e `09:00-AM` deve retornar a string `The zoo is closed` (Já que o Zoo está sempre fechado na segunda)', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(closed);
  });
  it('Testa se ao receber os argumentos `Tuesday` e `09:00-AM` deve retornar a string `The zoo is open`', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(opened);
  });
  it('Testa se ao receber os argumentos `Wednesday` e `09:00-AM` deve retornar a string `The zoo is closed`', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(closed);
  });
  it('Testa se ao receber os argumentos `Thu` e `09:00-AM` deve retornar a string `The day must be valid. Example: Monday`', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se ao receber os argumentos `Friday` e `09:00-ZM` deve retornar a string `The abbreviation must be `AM` or `PM`', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se ao receber os argumentos `Saturday` e `C9:00-AM` deve retornar a string `The hour should represent a number`', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Testa se ao receber os argumentos `Sunday` e `09:c0-AM` deve retornar a string `The minutes should represent a number`', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Testa se ao receber os argumentos `Monday` e `13:00-AM` deve retornar a string `The hour must be between 0 and 12`', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se ao receber os argumentos `Tuesday` e `09:60-AM` deve retornar a string `The minutes must be between 0 and 59`', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
