const assert = require('assert');
const sinon = require('sinon');
const endPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('endPaymentRequestToApi function', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should stub calculateNumber and log the correct message', () => {
    endPaymentRequestToApi(100, 20);

    // Verify that calculateNumber is called with the correct arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));

    // Verify that console.log is called with the correct message
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));
  });
});
