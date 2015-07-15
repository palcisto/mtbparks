'use strict';

var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    runSequence = require('run-sequence');

module.exports = function() {
  // build app for dev
  gulp.task('build:dev', ['clean'], function(cb) {
    global.prod = false;
    runSequence(['js:dev', 'css:app', 'img', 'html:dev'], 'inject:dev', cb);
  });

  // build app for prod
  gulp.task('build:prod', ['build:dev'], function(cb) {
    global.prod = true;
    runSequence(['js:prod', 'css:app', 'img'], 'inject:prod', 'html:prod', cb);
  });
};
