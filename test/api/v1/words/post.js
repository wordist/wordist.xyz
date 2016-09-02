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

    function testFor(wordPayload, cb) {
      superagent
      .post(API_URL + '/api/v1/words')
      .send(wordPayload)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        // Calling the end function will send the request
        let resJson = JSON.parse(res.text);
        expect(res.statusCode).to.equal(200);
        expect(resJson.wordname).to.equal(wordPayload.wordname);
        expect(resJson.userid).to.equal(wordPayload.userid);
        expect(resJson.tags).to.equal(wordPayload.tags);
        cb();
      });
    }

    var wordPayloadArray = [{
        wordname: 'word1',
        userid: 'gooduser1',
        tags: ['tag1', 'tag1']
      }, {
        wordname: 'word2',
        userid: 'gooduser2',
        tags: []
      }, {
        wordname: 'word3',
        userid: 'gooduser3',
        tags: ['tag3', 'tag3']
      }];

    it('POST /api/v1/words', (done) => {
      testFor(wordPayloadArray[0], () => {
        testFor(wordPayloadArray[1], () => {
          testFor(wordPayloadArray[2], done);
        });
      });
    });
});
