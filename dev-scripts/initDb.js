'use strict';

// DB have to be initialized for the first time

const r = require('rethinkdb');

r.connect({}, (err, con) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  r.dbCreate('wordist').run(con, (err, result) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('INIT DB - Success');
    console.log(result);
    process.exit(0);
  });
});
