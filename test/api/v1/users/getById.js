'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const superagent = require('superagent');
const API_URL = 'localhost:8081';

describe('/api/v1/users endpoints', () => {
  function testFor(id, value, callback) {
    superagent
      .get(API_URL + '/api/v1/users/' + id)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        callback();
    });
  }

  it('GET /v1/users/x', (done) => {
    testFor(1, {id: 1, name: 'Vishnu'}, () => {
        testFor(2, {id: 2, name: 'Vasanth'}, done);
    });
  });
});