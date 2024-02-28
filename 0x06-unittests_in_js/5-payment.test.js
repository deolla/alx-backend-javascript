const assert = require('assert');
const sinon = require('sinon');
const endPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('endPaymentRequestToApi function', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount=100 and totalShipping=20', () => {
    endPaymentRequestToApi(100, 20);

    // Verify that console.log is called once with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should log the correct message for totalAmount=10 and totalShipping=10', () => {
    endPaymentRequestToApi(10, 10);

    // Verify that console.log is called once with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
