'use strict';

module.exports = (request, reply) => {
  var r = request.server.plugins['hapi-rethinkdb'].rethinkdb;
  // r === this.rethinkdb;

  var conn = request.server.plugins['hapi-rethinkdb'].connection;
  // conn === this.rethinkdbConn;
  
  let userPayload = request.payload;
  
  userPayload.created_at = new Date();
  userPayload.updated_at = new Date();
  
  var options = {
    returnChanges: true
  };
  
  r.table('users')
    .insert(userPayload, options)
    .run(conn)
    .then(
      function (result) {
        /*jshint camelcase:false*/
        const response = result.changes[0].new_val;
        reply(response);
      },
      function (err) {
        const errResponse = { error : err };
        reply(errResponse);
      }
    );
};
