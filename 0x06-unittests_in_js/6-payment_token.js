const getPaymentTokenFromAPI = (success) => {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            reject('Error getting payment token');
        }
    });
};

module.exports = getPaymentTokenFromAPI;
