'use strict';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const superagent = require('superagent');
const API_URL = 'localhost:8081';
const server = require('../../../../server');

describe('/api/v1/users endpoints', () => {
  it('POST /api/v1/users', (done) => {
    var userPayload = {
      username: 'gooduser',
      password: 'mypassword',
      email: 'sample@wordist.xyz'
    };
    
    superagent
      .post(API_URL + '/api/v1/users')
      .send(userPayload)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        // Calling the end function will send the request
        let resJson = JSON.parse(res.text);
        expect(res.statusCode).to.equal(200);
        expect(resJson.username).to.equal(userPayload.username);
        expect(resJson.password).to.equal(userPayload.password);
        expect(resJson.email).to.equal(userPayload.email);
        done();
      });
  });
});
