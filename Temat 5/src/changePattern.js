"use strict";
exports.__esModule = true;
exports.changePattern = void 0;
require("./../style/mainPageDark.scss");
var changePattern = /** @class */ (function () {
    function changePattern(val) {
        this.value = val;
    }
    changePattern.prototype.changeToDark = function () {
        console.log(this.value);
    };
    return changePattern;
}());
exports.changePattern = changePattern;
