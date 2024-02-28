// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round numbers and return their sum', () => {
    assert.strictEqual(calculateNumber(2.4, 3.5), 6);
    assert.strictEqual(calculateNumber(5.7, 2.1), 8);
    assert.strictEqual(calculateNumber(1.1, 1.9), 3);
  });
});
