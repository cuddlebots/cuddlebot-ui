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

    browsers: ['Chrome', 'Safari'],

    plugins: [
      require("karma-chrome-launcher"),
      require("karma-mocha"),
      require("karma-safari-launcher"),
      require("karma-webpack")
    ]

  });
};
