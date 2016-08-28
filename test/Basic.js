'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('../server');

describe('Basic Routes', function() {

  it('GET /', (done) => {
      server.inject('/api', (res) => {
          expect(res.statusCode).to.equal(200);
          done();
      });
  });

  it('GET /api', (done) => {
      server.inject('/api', (res) => {
          expect(res.statusCode).to.equal(200);
          done();
      });
  });

  it('GET /docs', (done) => {
      server.inject('/docs', (res) => {
          expect(res.statusCode).to.equal(200);
          done();
      });
  });

  it('GET /junk', (done) => {
      server.inject('/junk', (res) => {
          expect(res.statusCode).to.equal(404);
          expect(res.result).to.equal({statusCode: 404, error: 'Not Found'});
          done();
      })
  });

});
