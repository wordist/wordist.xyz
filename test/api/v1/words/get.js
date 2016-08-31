'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const superagent = require('superagent');
const API_URL = 'localhost:8081';

describe('/api/v1/words endpoints', () => {
  describe('GET /api/v1/words', () => {
    it('handle naked request', (done) => {
      superagent
        .get(API_URL + '/api/v1/words')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
      });
    });
  });
});
    