'use strict';
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var ngrok = require('ngrok');

// Environment variables to be set for bingo API
var env = {
  DB_HOST : 'localhost',
  DB_PORT : '3306',
  LOG_DIR : 'logs',
  PORT : 3000
};

gulp.task('tunnel', function (done) {
  ngrok.connect(env.PORT, function (err, url) {
    if (err)
      console.error('Failed to create HTTP tunnel in ngrok', err);
    else {
      console.log('Tunneling Success. To access your API from internet, ' +
        'visit ' + url);
    env.URL = url;
    return done();
    }
  });
});

gulp.task('watch', ['tunnel'], function () {
  // start express js server with nodemon
  // This will automatically restart the server if you make any changes
  nodemon(
    {
      script: './bin/www',
      env : env
    }
  ).on('restart',
    function () {
      console.log('Restarting API');
      console.log('ngrok URL : ' + env.URL);
    }
  );
});

gulp.task('dev', ['tunnel', 'watch']);

// Define default task if needed in future
// gulp.task('default', ['dev']);
