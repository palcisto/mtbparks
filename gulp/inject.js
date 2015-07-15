'use strict';

var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

module.exports = function(paths) {
  // inject js and css into index.html for dev build
  gulp.task('inject:dev', function() {
    var scripts = gulp.src([
      // order is important here
      paths.dev.js + '/vendor.js', 
      paths.dev.js + '/app.js',
      paths.dev.js + '/templates.js'
    ], {read: false});

    var styles = gulp.src([
      // order is important here
      paths.dev.css + '/styles.css'
    ], {read: false});
        
    var injectOptions = {
      ignorePath: paths.dev.root,
      addRootSlash: false
    };

    return gulp.src(paths.src.root + '/index.html')
      .pipe($.inject(styles, injectOptions))
      .pipe($.inject(scripts, injectOptions))
      .pipe(gulp.dest(paths.dev.root));
  });

  // inject js and css into index.html for prod build
  gulp.task('inject:prod', function() {
    var scripts = gulp.src([
      // order is important here
      paths.prod.js + '/main.min.js'
    ], {read: false});

    var styles = gulp.src([
      // order is important here
      paths.prod.css + '/styles.min.css'
    ], {read: false});
        
    var injectOptions = {
      ignorePath: paths.prod.root,
      addRootSlash: false
    };

    return gulp.src(paths.dev.root + '/index.html')
      .pipe($.inject(styles, injectOptions))
      .pipe($.inject(scripts, injectOptions))
      .pipe(gulp.dest(paths.prod.root));
  });
};
