'use strict';

var status = require('hapi-status');

/* This file handles POST /api/v1/login
 */

module.exports = (request, reply) => {
  const r = request.server.plugins['hapi-rethinkdb'].rethinkdb;
  // r === this.rethinkdb;

  const conn = request.server.plugins['hapi-rethinkdb'].connection;
  // conn === this.rethinkdbConn;

  const username = request.payload.username;
  const password = request.payload.password;

  let query = {};

  if (username) {
    query = {username : username};
  }

  r.table('users')
    .filter(query)
    .run(conn)
    .then(
      function (userCursor) {
        userCursor.toArray(function(err, userResponseArray) {
          var user = userResponseArray[0];

          if (err || !user)
            return status.unauthorized(reply);

          if (user.password !== password) {
            return status.unauthorized(reply);
          }

          return status.ok(reply, {
            status: "authorized",
            user: user
          });
        });
      },
      function(err) {
        status.internalServerError(reply);
      }
    );
};
