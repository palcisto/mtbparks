'use strict';

var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

module.exports = function(paths) {
  var error = {
    title: function(error) {
      return error.message
    },
    message: function(error) {
      return error.fileName + ':' + error.lineNumber
    }
  };

  var processors = [
    require('autoprefixer-core')({
      browsers: ['last 2 versions', 'ie 9'],
      options: {
        map: true
      }
    })
  ];

  // build app styles
  gulp.task('css:app', function() {
    return gulp.src([paths.src.root + '/assets/css/styles.scss'])
      .pipe($.if(!global.prod, $.sourcemaps.init()))
        .pipe($.sass({
          outputStyle: 'nested', // libsass doesn't support expanded yet
          precision: 10
        }))
        .on('error', $.notify.onError(error))
        .pipe($.postcss(processors))
      .pipe($.if(!global.prod, $.sourcemaps.write()))
      .pipe($.if(global.prod, $.rename('styles.min.css')))
      .pipe($.if(global.prod, $.minifyCss({processImport: false})))
      .pipe($.size({title: "APP CSS", showFiles: true}))
      .pipe($.if(!global.prod, gulp.dest(paths.dev.css), gulp.dest(paths.prod.css)));
  });
};
