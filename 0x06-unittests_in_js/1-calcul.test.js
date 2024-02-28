const assert = require('assert');
const calculateNumber = require('./1-calcul'); // Update with the correct file name

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
    const result = calculateNumber('DiVIDE', 8, 2);
    assert.strictEqual(result, 4);
  });

  it('should handle division by zero and return "Error"', () => {
    const result = calculateNumber('DiVIDE', 6, 0);
    assert.strictEqual(result, 'Error');
  });
});
