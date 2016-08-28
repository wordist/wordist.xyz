'use strict';

module.exports = (request, reply) => {
  reply({
    app : 'wordist',
    currentVersion: 'v1',
    versions : [
      {
        name : 'v1',
        status : 'unstable'
      }
    ]
  });
};
