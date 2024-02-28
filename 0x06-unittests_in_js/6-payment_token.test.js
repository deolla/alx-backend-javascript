// 6-payment_token.test.js
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI function', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should not resolve when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        done(new Error('Promise should not be resolved'));
      })
      .catch((error) => {
        assert.strictEqual(error, 'Error getting payment token');
        done();
      });
  });
});
