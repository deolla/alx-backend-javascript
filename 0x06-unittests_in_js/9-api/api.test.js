const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /unknownEndpoint returns 404 status code', (done) => {
    request.get(`${API_URL}/unknownEndpoint`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('GET /cart/:id returns correct response for a valid number', (done) => {
    const cartId = 123; // Replace with a valid cart ID
    request.get(`${API_URL}/cart/${cartId}`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Payment methods for cart ${cartId}`);
      done();
    });
  });

  it('GET /cart/:id returns 404 status code for an invalid ID (not a number)', (done) => {
    const invalidCartId = 'invalid-id'; // Replace with an invalid cart ID
    request.get(`${API_URL}/cart/${invalidCartId}`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});