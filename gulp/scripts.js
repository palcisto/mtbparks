'use strict';

var gulp           = require('gulp'),
    $              = require('gulp-load-plugins')(),
    mainBowerFiles = require('main-bower-files');

module.exports = function(paths) {
  // build js for dev
  gulp.task('js:dev', ['app-js', 'vendor-js']);

  // build app js
  gulp.task('app-js', function() {
    return gulp.src(paths.src.js)
      .pipe($.sourcemaps.init())
      .pipe($.concat('app.js'))
      .pipe($.sourcemaps.write())
      .pipe($.size({title: "APP JS", showFiles: true}))
      .pipe(gulp.dest(paths.dev.js));
  });

  // build vendor js
  gulp.task('vendor-js', function() {
    // a new filter needs to be created since the task can run multiple times in the same stream (e.g. gulp watch) or else it will throw an error
    var jsFilter = $.filter('*.js');
    return gulp.src(mainBowerFiles())
      .pipe(jsFilter)
      .pipe($.sourcemaps.init())
      .pipe($.concat('vendor.js'))
      .pipe($.sourcemaps.write())
      .pipe($.size({title: "VENDOR JS", showFiles: true}))
      .pipe(gulp.dest(paths.dev.js));
  });

  // build js for prod
  gulp.task('js:prod', function() {
    return gulp.src([
        // order is important here
        paths.dev.js + '/vendor.js',
        paths.dev.js + '/app.js',
        paths.dev.js + '/templates.js'
      ])
      .pipe($.concat('main.min.js'))
      .pipe($.ngAnnotate())
      .pipe($.uglify())
      .pipe($.size({title: "MAIN JS", showFiles: true}))
      .pipe(gulp.dest(paths.prod.js));
  });
};
