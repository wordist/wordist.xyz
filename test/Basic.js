'use strict';

const Lab = require('lab');
const Code = require('code');
const superagent = require('superagent');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const API_URL = 'localhost:8081';

describe('Basic Routes', function() {

  it('GET /', (done) => {
      superagent
        .get(API_URL + '/')
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
  });

  it('GET /api', (done) => {
    superagent
      .get(API_URL + '/api')
      .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
      });
  });

  it('GET /docs', (done) => {
    superagent
      .get(API_URL + '/docs')
      .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
      });
  });

  it('GET /junk', (done) => {
    superagent
      .get(API_URL + '/junk')
      .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
      });
  });

});
