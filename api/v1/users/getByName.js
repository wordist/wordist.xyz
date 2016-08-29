'use strict';

module.exports = (request, reply) => {
  var r = request.server.plugins['hapi-rethinkdb'].rethinkdb;
  // r === this.rethinkdb;

  var conn = request.server.plugins['hapi-rethinkdb'].connection;
  // conn === this.rethinkdbConn;
  
  const userName = request.query.name;
  
  
  
  r.table('users')
    .filter({ username: userName })
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
