'use strict';

module.exports = [
  // static file routes
  {
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: '.',
              redirectToSlash: true,
              index: true
          }
      }
  },
  {
    method: 'GET',
    path: '/api',
    config: {
      handler: require('../pseudo/root.js')
    }
  }
]
.concat(require('../api/v1/users/routes.js'))
.concat(require('../api/v1/words/routes.js'))
.concat(require('../api/v1/pseudo/routes.js'));
