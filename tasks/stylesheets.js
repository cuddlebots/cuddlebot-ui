'use strict';

/**
 * Module dependencies.
 */

// gulp

var gulp = require('gulp');

// gulp modules

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

/**
 * Detect production.
 */

var production = process.env.NODE_ENV == 'production';

/**
 * Compile stylesheets files to CSS.
 */

gulp.task('css', function () {
  return gulp.src('app/styles/*.scss', {
      base: 'app/styles'
    })
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: production ? 'nested' : 'compressed'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www/css'));
});

/**
 * Watch stylesheets for changes.
 */

gulp.task('watch-css', ['css'], function () {
  gulp.watch('app/styles/**/*.scss', ['css']);
});
