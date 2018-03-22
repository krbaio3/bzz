// Karma configuration
// Generated on Wed Mar 21 2018 15:32:59 GMT+0100 (CET)

module.exports = function(config) {
  const testWebpackConfig = require('./build/webpack.test.conf.js');
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    // See https://github.com/webpack-contrib/karma-webpack
    files: [{ pattern: './test/index.ts', watched: false }],

    // list of files / patterns to exclude
    exclude: ['node_modules'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // add webpack as preprocessor
    preprocessors: {
      './test/index.ts': ['webpack', 'sourcemap']
    },

    // For Chrome, see https://stackoverflow.com/a/41737178/7961940
    // Redefine default mapping from file extensions to MIME-type
    // Set property name to required MIME, provide Array of extensions (without dots) as it's value
    mime: {
      'text/x-typescript': ['ts']
    },

    // Webpack Config at ./build/webpack.test.conf.js
    // See https://github.com/webpack-contrib/karma-webpack
    webpack: testWebpackConfig,

    // Not throw spam to console when running in karma
    // https://github.com/webpack/webpack-dev-middleware
    webpackMiddleware: {
      //webpack-dev-middleware configuration
      noInfo: true,
      // This property defines the level of messages that the module will log. Valid levels include: trace, debug, info, warn, error, silent
      logLevel: 'info',
      // and use stats to turn off verbose output
      stats: {
        // options i.e.
        chunks: false
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // By default all assets are served at http://localhost:[PORT]/base/
    //base in the URL, it is a reference to your basePath. You do not need to replace or provide your own base.
    proxies: {
      '/assets/': '/base/src/assets/',
      '/public/': '/base/public/'
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome'],
    // browsers: ['Chrome', 'Chrome_without_security', 'PhantomJS'],
    browsers: ['Chrome', 'PhantomJS'],
    // you can define custom flags
    customLaunchers: {
      Chrome: {
        // base: 'Chrome',
        flags: ['--disable-web-security', '--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
