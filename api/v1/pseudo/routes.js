'use strict';

const Joi = require('joi');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/login',
    handler: require('./login.js'),
    config: {
      validate: {
        payload: {
          username: Joi.string().alphanum().min(3).max(30).required(),
          password: Joi.string().required()
        }
      }
    }
  }
];
