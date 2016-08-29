'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('../../../../server');

describe('/api/v1/users endpoints', () => {
  function testFor(id, value, callback) {
      server.inject('/api/v1/users/' + id, (res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.result).to.equal(value);
          callback();
      });
  }

  it('GET /v1/users/x', (done) => {
      testFor(1, {id: 1, name: 'Vishnu'}, () => {
          testFor(2, {id: 2, name: 'Vasanth'}, done);
      });
  });
});