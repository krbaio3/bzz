const defineSupportCode = require("cucumber").defineSupportCode;

defineSupportCode(({ Given, When, Then }) => {
  Given("I do something", (callback) => {
    Promise.resolve("I do something");
    callback(null, 'ok');
  });

  When("I verified it", (callback) => {
    Promise.resolve("I verified it");
    callback(null, 'ok');
  });

  Then("a report will be created", (callback) => {
    Promise.resolve("a report will be created");
    callback(null, 'ok');
  });
});
