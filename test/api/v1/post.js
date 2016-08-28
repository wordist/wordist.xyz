'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('../../../server');

describe('/api/v1/users endpoints', () => {
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
      expect(res.result.username).to.equal(user.username);
      expect(res.result.password).to.equal(user.password);
      expect(res.result.email).to.equal(user.email);
      done();
    });
  });
});
