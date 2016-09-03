'use strict';

var superagent = require('superagent');
var _ = require('underscore');

class WordistAdapter {

  constructor(apiUrl) {
    this.API_URL = apiUrl;
  }
  
/*
 * Basic routes.
 */
  getRoot(callback) {
    this.get('/', function (err, getRootResponse) {
      if (err)
        return callback(err);

      if (_.isEmpty(getRootResponse))
        return callback(new Error('Failed to get API Server Info'));

      callback(null, getRootResponse);
    });
  };

  getDocs (callback) {
    this.get('/docs', function (err, getDocsResponse) {
      if (err)
        return callback(err);

      if (_.isEmpty(getDocsResponse))
        return callback(new Error('Failed to get API Docs'));

      callback(null, getDocsResponse);
    });
  };

/*
 * Adapter for 'users'
 */

  getUserById (id, callback) {
    this.get(
      '/api/v1/users/' + id,
      callback
    );
  };

  postUser (user, callback) {
    this.post(
      '/api/v1/users/',
      user,
      callback
    );
  };

  getUsers (query, callback) {
    this.get(
      '/api/v1/users?' + encodeURI(query),
      callback
    );
  };

/*
 * Adapter for 'words'
 */

  getWordById (id, callback) {
    this.get(
      '/api/v1/words/' + id,
      callback
    );
  };

  postWord (user, callback) {
    this.post(
      '/api/v1/words/',
      user,
      callback
    );
  };

  getWords (query, callback) {
    this.get(
      '/api/v1/words?' + encodeURI(query),
      callback
    );
  };

/*
 * Generic GET, POST functions.
 */

  get (path, callback) {
    var reqObj = superagent.get(this.API_URL + path);
    this.makeCall(reqObj, callback);
  };

  post (path, payload, callback) {
    var reqObj = superagent.post(this.API_URL + path).send(payload);
    this.makeCall(reqObj, callback);
  };

/*
 * Wrapper that makes a generic HTTP call.
 */
  makeCall (reqObj, callback) {
    reqObj
      .set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/json');

    reqObj.end((err, response) => {

      if (err || response.status > 299) {
        console.error('error in HTTP call' +
          JSON.stringify(err || response.status));
           callback(err || response.status);
      } else {
        console.log('received ' + JSON.stringify(response.text));
        callback(null, response);
      }
    });
  };
};

module.exports = WordistAdapter;