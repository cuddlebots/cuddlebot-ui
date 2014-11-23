'use strict';

/**
 * Module dependencies.
 */

var es = require('event-stream');
var webpack = require('webpack');
var webpackOptions = require('../webpack.conf.js');

// gulp

var gulp = require('gulp');

// gulp modules

var changed = require('gulp-changed');
var gwebpack = require('gulp-webpack');

/**
 * Detect production.
 */

var production = process.env.NODE_ENV == 'production';

/**
 * Set output filename.
 */

webpackOptions.output = {
  filename: 'app.js'
};

/**
 * Combine JavaScript files.
 */

gulp.task('js', function () {
  return gulp.src('app/start.js')
    .pipe(gwebpack(webpackOptions))
    .pipe(gulp.dest('www/js'));
});

/**
 * Watch JavaScript files for changes.
 */

gulp.task('watch-js', function () {
  gulp.src('app/start.js')
    .pipe(gwebpack({
      __proto__: webpackOptions,
      watch: true
    }))
    .pipe(gulp.dest('www/js'));
});
