'use strict';

/**
 * Module dependencies.
 */

// gulp

var gulp = require('gulp');

// gulp modules

var changed = require('gulp-changed');
var es = require('event-stream');

/**
 * Copy assets to www folder.
 */

gulp.task('assets', function () {
  var app = gulp.src('app/assets/**/*', {
    base: 'app/assets'
  });
  var npm = gulp.src('node_modules/font-awesome/fonts/*', {
    base: 'node_modules/font-awesome'
  });
  return es.concat(app, npm)
    .pipe(changed('www'))
    .pipe(gulp.dest('www'));
});

/**
 * Watch assets for changes.
 */

gulp.task('watch-assets', ['assets'], function () {
  gulp.watch('app/assets/**/*', ['assets']);
});
