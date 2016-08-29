'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('../../../../server');

describe('/api/v1/users endpoints', () => {
  describe('GET /api/v1/users', () => {
    it('handle naked request', (done) => {
      server.inject('/api/v1/users', (res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.result[0]).to.equal({id: 1, name: 'Vishnu'});
        expect(res.result[1]).to.equal({id: 2, name: 'Vasanth'});
        done();
      });
    });
  });
});
    