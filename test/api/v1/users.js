'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('../../../server');

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

    it('handle request with param name', (done) => {
      server.inject('/api/v1/users?name=Vasanth', (res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.result[0]).to.equal({id: 2, name: 'Vasanth'});
        expect(res.result).to.have.length(1);
        done();
      });
    });
  });

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


  it('POST /api/v1/users', (done) => {
    var user = {
      username: 'gooduser',
      password: 'mypassword',
      email: 'sample@wordist.xyz'
    };
    var request = {
      method: 'POST',
      url: '/api/v1/users',
      payload: JSON.stringify(user)
    };
    server.inject(request, (res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.result.payload).to.equal(user);
      done();
    });
  });
});
