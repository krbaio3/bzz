import { browser } from '../../node_modules/protractor';
import { SearchPageObject } from './app.po';

import { Given } from '../../node_modules/cucumber';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;


Given(/^I am on google page$/, async () => {
  await expect(browser.getTitle()).to.eventually.equal('Google');
});
