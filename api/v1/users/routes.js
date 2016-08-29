'use strict';

const Joi = require('joi');
let internals = {};

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/users',
    config: {
      validate: {
        query: {
          name: Joi.string()
        }
      },
      handler: require('./getByName.js')
    }
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
    handler: require('./getById.js')
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    handler: require('./post.js'),
    config: {
      validate: {
        payload: {
          username: Joi.string().alphanum().min(3).max(30).required(),
          password: Joi.string().required(),
          email: Joi.string().email().required()
        }
      }
    }
  }
];
