'use strict';

/**
 * Module dependencies.
 */

var es = require('event-stream');
var webpack = require('webpack');

// gulp

var gulp = require('gulp');

// gulp modules

var gwebpack = require('gulp-webpack');

/**
 * Detect production.
 */

var production = process.env.NODE_ENV == 'production';

/**
 * WebPack options.
 */

var webpackPlugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    FastClick: 'fastclick',
    'window.FastClick': 'fastclick',
    React: 'react'
  })
];

if (production) {
  webpackPlugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  );
}

var webpackOptions = {
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.jsx$/,
      loader: 'jsx'
    }]
  },
  plugins: webpackPlugins,
  output: {
    filename: 'app.js'
  }
};

/**
 * Combine JavaScript files.
 */

gulp.task('js', function () {
  var app = gulp.src('app/start.js')
    .pipe(gwebpack(webpackOptions));
  var modernizr = gulp.src('bower_components/modernizr/modernizr.js', {
    base: 'bower_components/modernizr'
  });
  return es.concat(app, modernizr)
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
    }));
  return gulp.src('bower_components/modernizr/modernizr.js', {
    base: 'bower_components/modernizr'
  }).pipe(gulp.dest('www/js'));
});
