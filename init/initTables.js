'use strict';

// DB have to be initialized for the first time

const r = require('rethinkdb');

r.connect({ db : 'wordist'}, (err, con) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  r.tableCreate('users').run(con, (err, result) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('INIT users - Success.');
    console.log(result);
    process.exit(0);
  });
});
