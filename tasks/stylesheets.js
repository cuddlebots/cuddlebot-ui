'use strict';

/**
 * Module dependencies.
 */

// gulp

var gulp = require('gulp');

// gulp modules

var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

/**
 * Detect production.
 */

var production = process.env.NODE_ENV == 'production';

/**
 * Compile stylesheets files to CSS.
 */

gulp.task('css', function () {
  return gulp.src('app/styles/*.less', {
      base: 'app/styles'
    })
    .pipe(sourcemaps.init())
    .pipe(less({
      compress: production
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www/css'));
});

/**
 * Watch stylesheets for changes.
 */

gulp.task('watch-css', ['css'], function () {
  gulp.watch('app/styles/**/*.less', ['css']);
});
