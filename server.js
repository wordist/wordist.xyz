'use strict';
const Hapi = require('hapi');
const Inert = require('inert');
const Lout = require('lout');
const Vision = require('vision');
const initialiseRoutes = require('./init/initialiseRoutes');
const path = require('path');
const HapiRethinkdb = require('hapi-rethinkdb');

const config = {
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public')
      }
    }
  }
};
const server = new Hapi.Server(config);

const port = 8081;

server.connection({
  port: port
});

const loutRegister = {
  register: Lout,
  options: {
    endpoint: '/docs'
  }
};

const rethinkdbRegister = {
  register: HapiRethinkdb,
  options : {
    host : process.env.R_HOST || 'localhost',
    port : process.env.R_PORT || 28015,
    db : process.env.R_DB || 'wordist'
  }
};

var serverPlugins = [Vision, Inert, loutRegister, rethinkdbRegister];

server.register(serverPlugins, (err) => {
  if (err) {
    console.error('Failed loading plugins ' + err);
    process.exit(1);
  }
  server.route(initialiseRoutes);
  server.initialize((err) => {
    if (err) {
      console.error('Failed initialize server ' + err);
      process.exit(1);
    }
    server.start(function () {
      if (err) {
        console.error('Failed start server ' + err);
        process.exit(1);
      }
      console.log('Server running at:', server.info.uri);
    });
  });
});

module.exports = server;
