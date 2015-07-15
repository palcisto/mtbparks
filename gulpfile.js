'use strict';

var gulp   = require('gulp'),
    wrench = require('wrench');

var paths = {
  bower:      'bower_components',
  styleguide: 'styleguide',
  src: {
    root: 'src',
    html: 'src/**/*.html',
    css:  ['src/assets/css/**/*.scss',
           'bower_components/**/*.scss'],
    js:   ['src/**/*.js',
           '!src/**/*_test.js'],
    img:  'src/assets/images/**/*'
  },
  dev: {
    root: 'dev_build',
    css:  'dev_build/assets/css',
    js:   'dev_build/assets/js',
    img:  'dev_build/assets/images'
  },
  prod: {
    root: 'prod_build',
    css:  'prod_build/assets/css',
    js:   'prod_build/assets/js',
    img:  'prod_build/assets/images'
  }
};

wrench.readdirSyncRecursive('./gulp').map(function(file) {
  require('./gulp/' + file)(paths);
});
