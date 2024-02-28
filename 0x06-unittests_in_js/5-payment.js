const Utils = require('./utils');

const endPaymentRequestToApi = (totalAmount, totalShipping) => {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
    // return total;
}

module.exports = endPaymentRequestToApi;
