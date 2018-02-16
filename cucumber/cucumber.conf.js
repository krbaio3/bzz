// protractor.conf.js

exports.config = {
    allScriptsTimeout: 99999,

    // The address of a running selenium server.
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    // The location of the selenium standalone server .jar file, relative
    // to the location of this config. If no other method of starting selenium
    // is found, this will default to
    // node_modules/protractor/selenium/selenium-server...
    // seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

    // The port to start the selenium server on, or null if the server should
    // find its own unused port.
    seleniumPort: 4444,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9876/',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Spec patterns are relative to the current working directly when protractor is called.
    specs: [
        './features/*.feature'
    ],

    // Options to be passed to Cucumber.
    cucumberOpts: {
        // Require files before executing the features.
        require: [
            'node_modules/angular-protractor-cucumber/src/step-definitions/**/*.js',
            'node_modules/angular-protractor-cucumber/src/support/**/*.js',
            'test/e2e/step-definitions/**/*.js',
            'test/e2e/support/**/*.js'
        ],
        // Only execute the features or scenarios with tags matching @dev.
        // This may be an array of strings to specify multiple tags to include.
        // tags: '@dev',
        // How to format features (progress, summary, pretty, json)
        format: 'json',
    },

    resultJsonOutputFile: './cucumber/result/results.json'
};




// // Protractor configuration file, see link for more information
// // https://github.com/angular/protractor/blob/master/lib/config.ts


// exports.config = {
//   allScriptsTimeout: 11000,
//   capabilities: {
//     'browserName': 'chrome'
//   },
//   directConnect: true,
//   baseUrl: 'http://localhost:4200/',

//   // Specs here are the cucumber feature files
//   specs: [
//     './e2e/features/*.feature'
//   ],

//   // Use a custom framework adapter and set its relative path
//   framework: 'custom',
//   frameworkPath: require.resolve('protractor-cucumber-framework'),

//   // cucumber command line options
//   cucumberOpts: {
//     // require step definition files before executing features
//     require: ['./e2e/steps/**/*.ts'],
//     // <string[]> (expression) only execute the features or scenarios with tags matching the expression
//     tags: [],
//     // <boolean> fail if there are any undefined or pending steps
//     strict: true,
//     // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
//     // format: [
//     //   'pretty',
//     //   'pretty:reports/summary.txt',
//     //   'json:reports/summary.json'
//     // ],
//     // <boolean> invoke formatters without executing steps
//     dryRun: false,
//     // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
//     compiler: []
//   },

//   // Enable TypeScript for the tests
//   onPrepare() {
//     require('ts-node').register({
//       project: 'e2e/tsconfig.e2e.json'
//     });
//   }
// };
