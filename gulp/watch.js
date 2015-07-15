'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

module.exports = function(paths) {
  // watch for app-related changes
  gulp.task('watch:dev', ['build:dev'], function() {
    gulp.watch(paths.src.css, function() {
      runSequence('css:app', browserSync.reload);
    });
    gulp.watch(paths.src.js, function() {
      runSequence('app-js', browserSync.reload);
    });
    gulp.watch(paths.src.html, function() {
      runSequence('html:dev', 'inject:dev', browserSync.reload);
    });
  });
};
