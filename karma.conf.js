const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    files: [
        'src/*.test.js',
        'src/**/*.test.js'
    ],

    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher')
    ],

    preprocessors: {
      'src/*.test.js': ['webpack'],
      'src/**/*.test.js': ['webpack']
    },

    reporters: ['progress'],

    singleRun: true,

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
