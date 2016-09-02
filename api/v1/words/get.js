'use strict';

/* This file handles all GET /api/v1/users routes.
 * If query params are specified then it filter the queried results.
 * Or, it returns all the GET results.
 */

module.exports = (request, reply) => {
  const r = request.server.plugins['hapi-rethinkdb'].rethinkdb;
  // r === this.rethinkdb;

  const conn = request.server.plugins['hapi-rethinkdb'].connection;
  // conn === this.rethinkdbConn;
  
  const wordname = request.query.wordname;
  const tag = request.query.tag;
  const userid = request.query.userid;
  
  let query = {};
  
  if (wordname) {
    query.wordname = wordname;
  }

  if (userid) {
    query.userid = userid;
  }
  
  if (tag) {
    query.tag = tag;
  }
  
  r.table('words')
    .filter(query)
    .run(conn)
    .then(
      function (wordCursor) {
        wordCursor.toArray(function(err, wordResponseArray) {
        if (err) {
          const errResponse = { error : err };
          reply(errResponse);
        }
        // array of words
        reply(wordResponseArray);
        });   
      },
      function(err) {
        const errResponse = { error : err };
        reply(errResponse);
      }
    );
};
