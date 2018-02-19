const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(({ Given, When, Then }) => {
  Given('I foo', (callback) => {
    Promise.resolve('I foo');
    callback(null, 'ok');
  });

  When('I foo it', (callback) => {
    Promise.resolve('I foo it');
    callback(null, 'ok');
  });

  Then('I foo the bar', (callback) => {
    Promise.resolve('I foo the bar');
    callback(null, 'ok');
  });
});
