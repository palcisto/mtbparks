'use strict';

var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

module.exports = function(paths) {
  // concatenate all html content & use angular's template cache
  gulp.task('html:dev', function() {
    return gulp.src([paths.src.html, '!src/index.html'])
      .pipe($.angularTemplatecache({module: 'mtbparks'}))
      .pipe(gulp.dest(paths.dev.js));
  });

  // minify html for prod
  gulp.task('html:prod', function() {
    var options = {
      empty: true,
      spare: true,
      quotes: true
    };
    return gulp.src(paths.prod.root + '/index.html')
      .pipe($.minifyHtml(options))
      .pipe(gulp.dest(paths.prod.root));
  });
};
