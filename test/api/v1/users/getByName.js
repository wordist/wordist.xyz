'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('../../../../server');

describe('/api/v1/users endpoints', () => {
  it('handle request with param name', (done) => {
      server.inject('/api/v1/users?name=gooduser', (res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.result[0].username).to.equal(user.username);
        expect(res.result[0].password).to.equal(user.password);
        expect(res.result[0].email).to.equal(user.email);
        done();
      });
  });
});
