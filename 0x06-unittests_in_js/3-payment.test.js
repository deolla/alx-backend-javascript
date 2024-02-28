const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  // Test if sendPaymentRequestToApi calls Utils.calculateNumber with the correct arguments
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy on Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);

    // Restore the original function to avoid side effects in other tests
    calculateNumberSpy.restore();
  });
});
