'use strict';

module.exports = (request, reply) => {
  const r = request.server.plugins['hapi-rethinkdb'].rethinkdb;
  // r === this.rethinkdb;

  const conn = request.server.plugins['hapi-rethinkdb'].connection;
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
