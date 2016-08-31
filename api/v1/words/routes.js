'use strict';

const Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/words',
    config: {
      validate: {
        query: {
          wordname: Joi.string(),
          userid: Joi.string(),
          tag: Joi.string()
        }
      },
      handler: require('./get.js')
    }
  },
  {
    method: 'GET',
    path: '/api/v1/words/{id}',
    handler: require('./getById.js')
  },
  {
    method: 'POST',
    path: '/api/v1/words',
    handler: require('./post.js'),
    config: {
      validate: {
        payload: {
          wordname: Joi.string().alphanum().min(1).max(30).required(),
          userid: Joi.string().required(),
          tags: Joi.array().items(Joi.string()),
          created_at: Joi.date().timestamp(),
          updated_at: Joi.date().timestamp()
        }
      }
    }
  }
];
