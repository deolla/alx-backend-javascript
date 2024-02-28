const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
  it('should correctly add two numbers', () => {
    const result = calculateNumber('SUM', 5.5, 3.3);
    assert.strictEqual(result, 9);
  });

  it('should correctly subtract two numbers', () => {
    const result = calculateNumber('SUBTRACT', 10, 4);
    assert.strictEqual(result, 6);
  });

  it('should correctly divide two numbers', () => {
    const result = calculateNumber('DIVIDE', 8, 2);
    assert.strictEqual(result, 4);
  });

  it('should handle division by zero and return "Error"', () => {
    const result = calculateNumber('DIVIDE', 6, 0);
    assert.strictEqual(result, 'Error');
  });

  it('should handle floating-point numbers in SUM operation', () => {
    const result = calculateNumber('SUM', 5.5, 3.8);
    assert.strictEqual(result, 10);
  });

  it('should correctly handle negative numbers in SUBTRACT operation', () => {
    const result = calculateNumber('SUBTRACT', -8, 3);
    assert.strictEqual(result, -11);
  });

  it('should handle floating-point division in DiVIDE operation', () => {
    const result = calculateNumber('DIVIDE', 7.5, 2);
    assert.strictEqual(result, 4);
  });

  it('should handle large numbers in SUM operation', () => {
    const result = calculateNumber('SUM', 999999999999999, 1);
    assert.strictEqual(result, 1000000000000000);
  });
});
