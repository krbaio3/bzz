// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const HTMLReport = require('protractor-html-reporter-2');
const jasmineReporters = require('jasmine-reporters');
const rimraf = require('rimraf');
const fs = require('fs');
const root = require('./.protractor.root.json');

exports.config = {
  baseUrl: root.baseUrl,
  specs: root.specs,
  exclude:[],
  framework: root.framework,
  allScriptsTimeout: root.allScriptsTimeout,
  jasmineNodeOpts: {
    showColors: root.jasmineNodeOpts.showColors,
    defaultTimeoutInterval: root.jasmineNodeOpts.defaultTimeoutInterval,
    showTiming: root.jasmineNodeOpts.showTiming,
    isVerbose: root.jasmineNodeOpts.isVerbose,
    includeStackTrace: root.jasmineNodeOpts.includeStackTrace,
    print: function() {},
  },
  capabilities: root.capabilities,
  directConnect: root.directConnect,
  // custom config
  beforeLaunch() {
    try {
      if (fs.existsSync(root.report)) {
        rimraf(root.report, () => {});
      }
      if (fs.existsSync(root.protractorReport)) {
        rimraf(root.protractorReport, () => {});
      }
    } catch (error) {
      console.error(error);
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'report'
      })
    );
  },
  onComplete() {
    let browserName, browserVersion;
    const capsPromise = browser.getCapabilities();

    capsPromise.then(caps => {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');
      let testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: root.protractorReport,
        outputFilename: 'index',
        screenshotPath: root.screenshots,
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from(root.report, testConfig);
    });
    rimraf(root.report, () => {});
  }
  // end custom config
};
