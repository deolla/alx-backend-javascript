const assert = require('assert');
const calcul = require('./1-calcul');

describe('calcul', () => {
  it('should add two rounded numbers when type is SUM', () => {
    assert.strictEqual(calcul('SUM', 3.2, 4.6), 8);
  });

  it('should subtract second rounded number from the first when type is SUBTRACT', () => {
    assert.strictEqual(calcul('SUBTRACT', 8.9, 2.3), 6);
  });

  it('should divide the first rounded number by the second when type is DIVIDE', () => {
    assert.strictEqual(calcul('DIVIDE', 10.8, 3), 3.6);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calcul('DIVIDE', 5.7, 0), 'Error');
  });
});