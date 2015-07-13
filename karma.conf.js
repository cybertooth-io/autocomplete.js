'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['browserify', 'jasmine'],

    reporters: ['progress', 'coverage', 'coveralls'],

    browsers: ['PhantomJS'],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    preprocessors: {
      'src/**/*.js': ['browserify', 'coverage'],
      'test/**/*_spec.js': 'browserify'
    },

    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'src/**/*.js',
      'test/**/*_spec.js'
    ]
  });
};
