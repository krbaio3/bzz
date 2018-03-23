"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('http://angular.github.io/protractor/#/tutorial');
    };
    AppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.id('tutorial')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
