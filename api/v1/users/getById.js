'use strict';

module.exports = (request, reply) => {
  var r = request.server.plugins['hapi-rethinkdb'].rethinkdb;
  // r === this.rethinkdb;

  var conn = request.server.plugins['hapi-rethinkdb'].connection;
  // conn === this.rethinkdbConn;
  
  const userId = request.params.id;
  
   r.table('users')
    .get(userId)
    .run(conn)
    .then(
      function (userResponse) {
        reply(userResponse);
      },
      function(err) {
        const errResponse = { error : err };
        reply(errResponse);
      }
    );
};
