// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'core-js';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function() {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// require all test files (files that ends with .spec.js or .spect.ts)
const testsContext = require.context('../src', true, /\.spec$/);
testsContext.keys().map(testsContext);

__karma__.start();
/**FASE II TESTING */

// require all src files except main.ts for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../src', true, /^\.\/(?!main(\.ts)?$)/)
// srcContext.keys().forEach(srcContext)
