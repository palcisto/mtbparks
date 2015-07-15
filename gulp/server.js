'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    browserSyncSpa  = require('browser-sync-spa');

module.exports = function(paths) {
  var browserSyncInit = function(dir) {
    browserSync({
      port: 8000,
      open: 'external',
      host: 'localhost',
      server: {
        baseDir: dir
      }
    });
  };

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]' // Only needed for angular apps
  }));

  // start server pointing to dev build
  gulp.task('serve', ['watch:dev'], function() {
    browserSyncInit(paths.dev.root);
  });

  // start server pointing to prod build
  gulp.task('serve:prod', ['build:prod'], function() {
    browserSyncInit(paths.prod.root);
  });
};
