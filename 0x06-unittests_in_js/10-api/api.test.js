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

  describe('GET /available_payments', () => {
    it('returns available payment methods', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        const responseBody = JSON.parse(body);
        expect(res.statusCode).to.be.equal(200);
        expect(responseBody.payment_methods.credit_cards).to.be.true;
        expect(responseBody.payment_methods.paypal).to.be.false;
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('returns a welcome message with the provided username', (done) => {
      const username = 'JohnDoe'; // Replace with the desired username
      request.post(
        {
          url: `${API_URL}/login`,
          json: { userName: username },
        },
        (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal(`Welcome ${username}`);
          done();
        });
    });
  });
});