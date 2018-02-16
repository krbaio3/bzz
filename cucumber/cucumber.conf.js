// protractor.conf.js

const path = require('path');

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
        compiler: 'ts:ts-node/register',

        require: [
            path.resolve(process.cwd(), './**/*.steps.js')
        ],
        // Tell CucumberJS to save the JSON report
        format: 'json:cucumber/report/results.json',
        strict: true,
        tags: '@TypeScriptScenario or @CucumberScenario or @ProtractorScenario',
    },
    
    // Plugin
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],

    // resultJsonOutputFile: './cucumber/result/results.json'
};
