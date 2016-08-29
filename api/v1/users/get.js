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
  
  const username = request.query.username;
  const email = request.query.email;
  
  let query = {};
  
  if (username) {
    query = {username : username};
  }

  if (email) {
    query.email = email;
  }
  
  r.table('users')
    .filter(query)
    .run(conn)
    .then(
      function (userCursor) {
        userCursor.toArray(function(err, userResponseArray) {
        if (err) {
          const errResponse = { error : err };
          reply(errResponse);
        }
        // array of users
        reply(userResponseArray);
        });   
      },
      function(err) {
        const errResponse = { error : err };
        reply(errResponse);
      }
    );
};
