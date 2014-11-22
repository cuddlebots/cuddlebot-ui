'use strict';

/**
 * Karma configuration.
 */

module.exports = function(config) {
  config.set({

    frameworks: ['mocha'],

    files: [
      'test/*_test.js',
      'test/**/*_test.js'
    ],

    preprocessors: {
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack']
    },

    reporters: ['progress'],

    browsers: ['PhantomJS'],

    plugins: [
      require("karma-mocha"),
      require("karma-phantomjs-launcher"),
      require("karma-webpack")
    ]

  });
};
