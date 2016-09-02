'use strict';

// DB have to be initialized for the first time

const r = require('rethinkdb');

r.connect({ db : 'wordist'}, (err, con) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } 
  
  // Create users table
  r.tableCreate('users').run(con, (err, result) => {
    if (err) {
      // Happens when table 'users' is already present. No need to exit.
      console.log(err);
    } else {
      console.log('INIT users - Success.');
      console.log(result);
    }
  });
  
  // Create words table
  r.tableCreate('words').run(con, (err, result) => {
    if (err) {
      
      // Happens when table 'words' is already present.
      // All tables created. Exit with error code.
      console.log(err);
      process.exit(1);
    } else {
      
      console.log('INIT words - Success.');
      console.log(result);
      process.exit(0);
    }
  });
});
