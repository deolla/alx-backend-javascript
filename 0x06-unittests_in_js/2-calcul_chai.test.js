// 2-calcul_chai.test.js (using Chai's expect)
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
  it('should correctly add two numbers', () => {
    const result = calculateNumber('SUM', 5.5, 3.3);
    expect(result).to.equal(9);
  });

  it('should correctly subtract two numbers', () => {
    const result = calculateNumber('SUBTRACT', 10, 4);
    expect(result).to.equal(6);
  });

  it('should correctly divide two numbers', () => {
    const result = calculateNumber('DiVIDE', 8, 2);
    expect(result).to.equal(4);
  });

  it('should handle division by zero and return "Error"', () => {
    const result = calculateNumber('DiVIDE', 6, 0);
    expect(result).to.equal('Error');
  });
});
