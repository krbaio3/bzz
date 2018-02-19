"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var SearchPageObject = /** @class */ (function () {
    function SearchPageObject() {
        this.searchTextBox = protractor_1.$('#lst-ib');
        this.searchButton = protractor_1.$('input[value="Google Search"]');
    }
    return SearchPageObject;
}());
exports.SearchPageObject = SearchPageObject;
