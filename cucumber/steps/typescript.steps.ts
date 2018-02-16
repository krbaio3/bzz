import { browser } from 'protractor';
import { SearchPageObject } from './app.po';
import { Given } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on google page$/, async () => {
  await expect(browser.getTitle()).to.eventually.equal('Google');
});
