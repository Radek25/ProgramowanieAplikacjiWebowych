/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/battleships.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/battleships.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#game-field, .battleships-div {\n  width: 90vw;\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  font-family: \"Baloo Tammudu 2\", cursive;\n  background-color: #3bceac;\n  flex-wrap: wrap;\n  position: relative;\n}\n#game-field table, .battleships-div table {\n  margin-top: 80px;\n  background-color: #3bceac;\n}\n#game-field .cell, .battleships-div .cell {\n  width: 100px;\n  height: 100px;\n  border: 2px solid #0ead69;\n  background-color: #0ead69;\n  text-align: center;\n}\n#game-field .cell .fa-times, .battleships-div .cell .fa-times, #game-field .cell .fa-circle, .battleships-div .cell .fa-circle {\n  font-size: 50px;\n}\n#game-field .cell .fa-times, .battleships-div .cell .fa-times {\n  color: #ffffff;\n}\n#game-field .control-panel, .battleships-div .control-panel {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#game-field input, .battleships-div input, #game-field button, .battleships-div button {\n  width: 250px;\n  height: 40px;\n  border: 2px solid #0ead69;\n  border-radius: 5px;\n  padding-left: 10px;\n  outline: none;\n}\n#game-field button, .battleships-div button {\n  width: 50px;\n  height: 30px;\n  border-radius: 5px;\n  margin: 0 20px;\n  padding: 0;\n  background-color: #0ead69;\n}\n#game-field .end, .battleships-div .end, #game-field .winner-div, .battleships-div .winner-div {\n  width: 80px;\n  height: 30px;\n  border: 2px solid #ffffff;\n  background-color: #3f3f3f;\n  color: #ffffff;\n  display: none;\n  text-align: center;\n  position: absolute;\n  z-index: 3;\n  font-size: 16px;\n  justify-content: center;\n  align-items: center;\n}\n#game-field .winner-div, .battleships-div .winner-div {\n  width: 50%;\n  height: auto;\n  border-radius: 10px;\n  padding: 5px;\n  flex-wrap: wrap;\n  top: 10px;\n}\n#game-field .winner-div .symbol, .battleships-div .winner-div .symbol {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  font-weight: 900;\n}\n#game-field .break-field, .battleships-div .break-field {\n  width: 300px;\n  height: 200px;\n  background-color: red;\n  position: absolute;\n  top: 100px;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n#game-field .break-field-button, .battleships-div .break-field-button {\n  width: 50px;\n  height: 30px;\n  background-color: black;\n}\n\n.battleships-div {\n  font-size: 50px;\n}\n.battleships-div button {\n  width: 100px;\n  height: 40px;\n  border: 2px solid #ffffff;\n  background-color: #3f3f3f;\n  position: absolute;\n  top: 200px;\n  color: #ffffff;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./style/tictactou.scss","webpack://./style/mixins.scss","webpack://./style/battleships.scss"],"names":[],"mappings":"AACA;ECUI,SAAA;EACA,UAAA;EACA,sBAAA;ACTJ;;AFAA;ECFI,WDGiB;ECFjB,YDEuB;ECCvB,aAAA;EACA,uBAAA;EACA,mBAAA;EAoCA,mBADuB;EAVvB,uCAAA;EDxBA,yBCWQ;EDVR,eAAA;EACA,kBAAA;AEMJ;AFLI;EACI,gBAAA;EACA,yBCMI;ACCZ;AFLG;ECdC,YDeoB;ECdpB,aDc2B;ECwB3B,yBAAA;EDtBI,yBAAA;EACD,kBAAA;AEQP;AFPO;EACK,eAAA;AESZ;AFPQ;EACI,cCJJ;ACaR;AFNG;EC1BC,WD2BqB;EC1BrB,YD0B2B;ECvB3B,aAAA;EACA,uBAAA;EACA,mBAAA;ACiCJ;AFTG;EC9BC,YD+BqB;EC9BrB,YD8B4B;ECQ5B,yBAAA;EAGA,kBDTwB;EACpB,kBAAA;EACA,aAAA;AEYR;AFVG;ECrCC,WDuCoB;ECtCpB,YDsC0B;ECG1B,kBDFuB;EACpB,cAAA;EACA,UAAA;EACA,yBC1BK;ACsCZ;AFVG;EC7CC,WD8CqB;EC7CrB,YD6C2B;ECP3B,yBAAA;EDSI,yBCjCG;EDkCH,cC9BA;ED+BA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AEaR;AFXG;EC1DC,UD4DqB;EC3DrB,YD2D0B;EClB1B,mBDmBwB;EACpB,YAAA;EACA,eAAA;EACA,SAAA;AEaR;AFZQ;ECjEJ,WDkEyB;ECjEzB,YDiE+B;EC9D/B,aAAA;EACA,uBAAA;EACA,mBAAA;ED8DQ,eAAA;EACA,gBAAA;AEiBZ;AFdI;EACI,YAAA;EACA,aAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AEgBR;AFdI;EACI,WAAA;EACA,YAAA;EACA,uBAAA;AEgBR;;AArGA;EAEI,eAAA;AAuGJ;AAtGI;EDHA,YCIsB;EDHtB,YCG6B;EDmC7B,yBAAA;ECjCI,yBDSG;ECRH,kBAAA;EACA,UAAA;EACA,cDUA;ECTA,eAAA;AAyGR","sourcesContent":["@import '../style/mixins.scss';\r\n*{\r\n    @include deflautSettings;\r\n}\r\n#game-field{\r\n    @include divSize(90vw, 90vh);\r\n    @include flexOption;\r\n    @include mainRadius;\r\n    @include mainFont;\r\n    background-color: $oceanBlue;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    table{\r\n        margin-top: 80px;\r\n        background-color: $oceanBlue\r\n    }\r\n   .cell{\r\n       @include divSize(100px, 100px);\r\n       @include mainBorder($darkGreen);\r\n        background-color: $darkGreen;\r\n       text-align: center;\r\n       .fa-times, .fa-circle{\r\n            font-size: 50px;\r\n        }\r\n        .fa-times{\r\n            color: $white;\r\n        }\r\n   }\r\n   .control-panel{\r\n        @include divSize(100%, auto);\r\n        @include flexOption;\r\n   }\r\n   input{\r\n        @include divSize(250px, 40px);\r\n        @include mainBorder($darkGreen);\r\n        @include mainRadius(5px);\r\n        padding-left: 10px;\r\n        outline: none;\r\n   }\r\n   button{\r\n       @extend input;\r\n       @include divSize(50px, 30px);\r\n       @include mainRadius(5px);\r\n       margin: 0 20px;\r\n       padding: 0;\r\n       background-color: $darkGreen;\r\n   }\r\n   .end{\r\n        @include divSize(80px, 30px);\r\n        @include mainBorder($white);\r\n        background-color: $darkGrey;\r\n        color: $white;\r\n        display: none;\r\n        text-align: center;\r\n        position: absolute;\r\n        z-index: 3;\r\n        font-size: 16px;\r\n        justify-content: center;\r\n        align-items: center;\r\n   }\r\n   .winner-div{\r\n        @extend .end;\r\n        @include divSize(50%, auto);\r\n        @include mainRadius(10px);\r\n        padding: 5px;\r\n        flex-wrap: wrap;\r\n        top: 10px;\r\n        .symbol{\r\n            @include divSize(100%, auto);\r\n            @include flexOption;\r\n            font-size: 40px;\r\n            font-weight: 900;\r\n        }\r\n    }\r\n    .break-field{\r\n        width: 300px;\r\n        height: 200px;\r\n        background-color: red;\r\n        position: absolute;\r\n        top: 100px;\r\n        display: none;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .break-field-button{\r\n        width: 50px;\r\n        height: 30px;\r\n        background-color: black;\r\n    }\r\n}","//Size of pages mixins\r\n@mixin  divSize($width, $height){\r\n    width: $width;\r\n    height: $height;\r\n}\r\n@mixin flexOption {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin  deflautSettings {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n//Colors\r\n$darkGrey: #3f3f3f;\r\n$lightGreen: #8cc534;\r\n$darkGreen: #0ead69;\r\n$oceanBlue: #3bceac;\r\n$white: #ffffff;\r\n\r\n//Backgrounds options\r\n@mixin  gameboadrColorLight{\r\n    background-color: $oceanBlue;\r\n}\r\n@mixin  gameboadrColorDark{\r\n    background-color: $lightGreen;\r\n}\r\n\r\n//Fonts mixins\r\n@mixin  mainFont {\r\n    font-family: 'Baloo Tammudu 2', cursive;\r\n}\r\n@mixin titleFont {\r\n    font-family: 'Do Hyeon', sans-serif;\r\n}\r\n\r\n//Border mixins\r\n@mixin  mainBorder($colorOfBorder) {\r\n    border: 2px solid $colorOfBorder;\r\n}\r\n@mixin mainRadius($radius: 10px){\r\n    border-radius: $radius;\r\n}\r\n\r\n//Games Icons\r\n@mixin iconDeflautPosition{\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n@mixin ticIcon {\r\n    background-image: url('../dist/img/TicTacTouIcon.jpg');\r\n}\r\n@mixin shipIcon {\r\n    background-image: url('../dist/img/BattleShipsIcon.jpg');\r\n}\r\n","@import '../style/mixins.scss';\r\n@import '../style/tictactou.scss';\r\n.battleships-div{\r\n    @extend #game-field;\r\n    font-size: 50px;\r\n    button{\r\n        @include divSize (100px, 40px);\r\n        @include mainBorder($white);\r\n        background-color: $darkGrey;\r\n        position: absolute;\r\n        top: 200px;\r\n        color: $white;\r\n        cursor: pointer;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/mainPage.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/mainPage.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dist_img_TicTacTouIcon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/img/TicTacTouIcon.jpg */ "./dist/img/TicTacTouIcon.jpg");
/* harmony import */ var _dist_img_BattleShipsIcon_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/img/BattleShipsIcon.jpg */ "./dist/img/BattleShipsIcon.jpg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_dist_img_TicTacTouIcon_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_dist_img_BattleShipsIcon_jpg__WEBPACK_IMPORTED_MODULE_4__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bgColor: #ffffff;\n  --titleColor: #3f3f3f;\n  --borderColor: #3f3f3f;\n}\n\n[pattern=darkMode] {\n  --bgColor: #3f3f3f;\n  --titleColor: #ffffff;\n  --borderColor: #8cc534;\n}\n\n[pattern=lightMode] {\n  --bgColor: #ffffff;\n  --titleColor: #3f3f3f;\n  --borderColor: #3f3f3f;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Baloo Tammudu 2\", cursive;\n  padding: 10px;\n  overflow: hidden;\n  flex-wrap: wrap;\n  background-color: var(--bgColor);\n}\nbody h1 {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Do Hyeon\", sans-serif;\n  color: var(--titleColor);\n}\nbody .pattern-button {\n  width: 150px;\n  height: 30px;\n  border: 2px solid #3bceac;\n  border-radius: 10px;\n  color: #ffffff;\n  background-color: #0ead69;\n  position: absolute;\n  padding: 5px;\n  top: 10px;\n  right: 10px;\n  outline: none;\n  cursor: pointer;\n}\nbody .game-keeper {\n  width: 50%;\n  height: 320px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  margin: 150px auto 0;\n  padding: 10px 20px;\n}\nbody .game-keeper .tic-icon, body .game-keeper .ships-icon {\n  width: 200px;\n  height: 240px;\n  border-radius: 10px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 2px solid var(--borderColor);\n  cursor: pointer;\n  margin: 10px 40px;\n}\nbody .game-keeper .tic-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\nbody .game-keeper .ships-icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}", "",{"version":3,"sources":["webpack://./style/colors.scss","webpack://./style/mainPage.scss","webpack://./style/mixins.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,qBAAA;EACA,sBAAA;ACCJ;;ADCA;EACI,kBAAA;EACA,qBAAA;EACA,sBAAA;ACEJ;;ADAA;EACI,kBAAA;EACA,qBAAA;EACA,sBAAA;ACGJ;;AAdA;ECAI,WDCiB;ECAjB,YAAA;EAGA,aAAA;EACA,uBAAA;EACA,mBAAA;EAyBA,uCAAA;ED3BA,aAAA;EACA,gBAAA;EACA,eAAA;EACA,gCAAA;AAoBJ;AAnBI;ECRA,WDSqB;ECRrB,YDQ2B;ECL3B,aAAA;EACA,uBAAA;EACA,mBAAA;EA4BA,mCAAA;EDtBI,wBAAA;AAwBR;AAtBI;ECdA,YDeqB;ECdrB,YDc4B;ECwB5B,yBAAA;EAGA,mBADuB;EDvBnB,cCCA;EDAA,yBCFI;EDGJ,kBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AAyBR;AAvBI;EC3BA,UD4BqB;EC3BrB,aD2B0B;ECxB1B,aAAA;EACA,uBAAA;EACA,mBAAA;EAoCA,mBADuB;EDVnB,oBAAA;EACA,kBAAA;AA4BR;AA3BQ;ECjCJ,YDkCyB;ECjCzB,aDiCgC;ECQhC,mBADuB;EAMvB,sBAAA;EACA,4BAAA;EATA,oCAAA;EDDQ,eAAA;EACA,iBAAA;AA+BZ;AA7BQ;ECUJ,yDAAA;ADsBJ;AA7BQ;ECUJ,yDAAA;ADsBJ","sourcesContent":[":root{\r\n    --bgColor: #ffffff;\r\n    --titleColor: #3f3f3f;\r\n    --borderColor: #3f3f3f;\r\n}\r\n[pattern='darkMode']{\r\n    --bgColor: #3f3f3f;\r\n    --titleColor: #ffffff;\r\n    --borderColor: #8cc534;\r\n}\r\n[pattern ='lightMode']{\r\n    --bgColor: #ffffff;\r\n    --titleColor: #3f3f3f;\r\n    --borderColor: #3f3f3f;\r\n}","@import './mixins.scss';\r\n@import './colors.scss';\r\nbody{\r\n    @include divSize(100%, 100%);\r\n    @include flexOption;\r\n    @include mainFont;\r\n    padding: 10px;\r\n    overflow: hidden;\r\n    flex-wrap: wrap;\r\n    background-color: var(--bgColor);\r\n    h1{\r\n        @include divSize(100%, auto);\r\n        @include flexOption;\r\n        @include titleFont;\r\n        color: var(--titleColor);\r\n    }\r\n    .pattern-button{\r\n        @include divSize(150px, 30px);\r\n        @include mainBorder($oceanBlue);\r\n        @include mainRadius;\r\n        color: $white;\r\n        background-color: $darkGreen;\r\n        position: absolute;\r\n        padding: 5px;\r\n        top: 10px;\r\n        right: 10px;\r\n        outline: none;\r\n        cursor: pointer;\r\n    }\r\n    .game-keeper{\r\n        @include divSize(50%, 320px);\r\n        @include flexOption;\r\n        @include mainRadius;\r\n        margin: 150px auto 0;\r\n        padding: 10px 20px;\r\n        .tic-icon, .ships-icon{\r\n            @include divSize(200px, 240px);\r\n            @include mainRadius;\r\n            @include iconDeflautPosition;\r\n            @include mainBorder(var(--borderColor));\r\n            cursor: pointer;\r\n            margin: 10px 40px;\r\n        }\r\n        .tic-icon{\r\n            @include ticIcon;\r\n        }\r\n        .ships-icon{\r\n            @include shipIcon;\r\n        }\r\n    }\r\n}","//Size of pages mixins\r\n@mixin  divSize($width, $height){\r\n    width: $width;\r\n    height: $height;\r\n}\r\n@mixin flexOption {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin  deflautSettings {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n//Colors\r\n$darkGrey: #3f3f3f;\r\n$lightGreen: #8cc534;\r\n$darkGreen: #0ead69;\r\n$oceanBlue: #3bceac;\r\n$white: #ffffff;\r\n\r\n//Backgrounds options\r\n@mixin  gameboadrColorLight{\r\n    background-color: $oceanBlue;\r\n}\r\n@mixin  gameboadrColorDark{\r\n    background-color: $lightGreen;\r\n}\r\n\r\n//Fonts mixins\r\n@mixin  mainFont {\r\n    font-family: 'Baloo Tammudu 2', cursive;\r\n}\r\n@mixin titleFont {\r\n    font-family: 'Do Hyeon', sans-serif;\r\n}\r\n\r\n//Border mixins\r\n@mixin  mainBorder($colorOfBorder) {\r\n    border: 2px solid $colorOfBorder;\r\n}\r\n@mixin mainRadius($radius: 10px){\r\n    border-radius: $radius;\r\n}\r\n\r\n//Games Icons\r\n@mixin iconDeflautPosition{\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n@mixin ticIcon {\r\n    background-image: url('../dist/img/TicTacTouIcon.jpg');\r\n}\r\n@mixin shipIcon {\r\n    background-image: url('../dist/img/BattleShipsIcon.jpg');\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/tictactou.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/tictactou.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#game-field {\n  width: 90vw;\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  font-family: \"Baloo Tammudu 2\", cursive;\n  background-color: #3bceac;\n  flex-wrap: wrap;\n  position: relative;\n}\n#game-field table {\n  margin-top: 80px;\n  background-color: #3bceac;\n}\n#game-field .cell {\n  width: 100px;\n  height: 100px;\n  border: 2px solid #0ead69;\n  background-color: #0ead69;\n  text-align: center;\n}\n#game-field .cell .fa-times, #game-field .cell .fa-circle {\n  font-size: 50px;\n}\n#game-field .cell .fa-times {\n  color: #ffffff;\n}\n#game-field .control-panel {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#game-field input, #game-field button {\n  width: 250px;\n  height: 40px;\n  border: 2px solid #0ead69;\n  border-radius: 5px;\n  padding-left: 10px;\n  outline: none;\n}\n#game-field button {\n  width: 50px;\n  height: 30px;\n  border-radius: 5px;\n  margin: 0 20px;\n  padding: 0;\n  background-color: #0ead69;\n}\n#game-field .end, #game-field .winner-div {\n  width: 80px;\n  height: 30px;\n  border: 2px solid #ffffff;\n  background-color: #3f3f3f;\n  color: #ffffff;\n  display: none;\n  text-align: center;\n  position: absolute;\n  z-index: 3;\n  font-size: 16px;\n  justify-content: center;\n  align-items: center;\n}\n#game-field .winner-div {\n  width: 50%;\n  height: auto;\n  border-radius: 10px;\n  padding: 5px;\n  flex-wrap: wrap;\n  top: 10px;\n}\n#game-field .winner-div .symbol {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  font-weight: 900;\n}\n#game-field .break-field {\n  width: 300px;\n  height: 200px;\n  background-color: red;\n  position: absolute;\n  top: 100px;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n#game-field .break-field-button {\n  width: 50px;\n  height: 30px;\n  background-color: black;\n}", "",{"version":3,"sources":["webpack://./style/tictactou.scss","webpack://./style/mixins.scss"],"names":[],"mappings":"AACA;ECUI,SAAA;EACA,UAAA;EACA,sBAAA;ADTJ;;AAAA;ECFI,WDGiB;ECFjB,YDEuB;ECCvB,aAAA;EACA,uBAAA;EACA,mBAAA;EAoCA,mBADuB;EAVvB,uCAAA;EDxBA,yBCWQ;EDVR,eAAA;EACA,kBAAA;AAMJ;AALI;EACI,gBAAA;EACA,yBCMI;ADCZ;AALG;ECdC,YDeoB;ECdpB,aDc2B;ECwB3B,yBAAA;EDtBI,yBAAA;EACD,kBAAA;AAQP;AAPO;EACK,eAAA;AASZ;AAPQ;EACI,cCJJ;ADaR;AANG;EC1BC,WD2BqB;EC1BrB,YD0B2B;ECvB3B,aAAA;EACA,uBAAA;EACA,mBAAA;ADiCJ;AATG;EC9BC,YD+BqB;EC9BrB,YD8B4B;ECQ5B,yBAAA;EAGA,kBDTwB;EACpB,kBAAA;EACA,aAAA;AAYR;AAVG;ECrCC,WDuCoB;ECtCpB,YDsC0B;ECG1B,kBDFuB;EACpB,cAAA;EACA,UAAA;EACA,yBC1BK;ADsCZ;AAVG;EC7CC,WD8CqB;EC7CrB,YD6C2B;ECP3B,yBAAA;EDSI,yBCjCG;EDkCH,cC9BA;ED+BA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;AAaR;AAXG;EC1DC,UD4DqB;EC3DrB,YD2D0B;EClB1B,mBDmBwB;EACpB,YAAA;EACA,eAAA;EACA,SAAA;AAaR;AAZQ;ECjEJ,WDkEyB;ECjEzB,YDiE+B;EC9D/B,aAAA;EACA,uBAAA;EACA,mBAAA;ED8DQ,eAAA;EACA,gBAAA;AAiBZ;AAdI;EACI,YAAA;EACA,aAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAgBR;AAdI;EACI,WAAA;EACA,YAAA;EACA,uBAAA;AAgBR","sourcesContent":["@import '../style/mixins.scss';\r\n*{\r\n    @include deflautSettings;\r\n}\r\n#game-field{\r\n    @include divSize(90vw, 90vh);\r\n    @include flexOption;\r\n    @include mainRadius;\r\n    @include mainFont;\r\n    background-color: $oceanBlue;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    table{\r\n        margin-top: 80px;\r\n        background-color: $oceanBlue\r\n    }\r\n   .cell{\r\n       @include divSize(100px, 100px);\r\n       @include mainBorder($darkGreen);\r\n        background-color: $darkGreen;\r\n       text-align: center;\r\n       .fa-times, .fa-circle{\r\n            font-size: 50px;\r\n        }\r\n        .fa-times{\r\n            color: $white;\r\n        }\r\n   }\r\n   .control-panel{\r\n        @include divSize(100%, auto);\r\n        @include flexOption;\r\n   }\r\n   input{\r\n        @include divSize(250px, 40px);\r\n        @include mainBorder($darkGreen);\r\n        @include mainRadius(5px);\r\n        padding-left: 10px;\r\n        outline: none;\r\n   }\r\n   button{\r\n       @extend input;\r\n       @include divSize(50px, 30px);\r\n       @include mainRadius(5px);\r\n       margin: 0 20px;\r\n       padding: 0;\r\n       background-color: $darkGreen;\r\n   }\r\n   .end{\r\n        @include divSize(80px, 30px);\r\n        @include mainBorder($white);\r\n        background-color: $darkGrey;\r\n        color: $white;\r\n        display: none;\r\n        text-align: center;\r\n        position: absolute;\r\n        z-index: 3;\r\n        font-size: 16px;\r\n        justify-content: center;\r\n        align-items: center;\r\n   }\r\n   .winner-div{\r\n        @extend .end;\r\n        @include divSize(50%, auto);\r\n        @include mainRadius(10px);\r\n        padding: 5px;\r\n        flex-wrap: wrap;\r\n        top: 10px;\r\n        .symbol{\r\n            @include divSize(100%, auto);\r\n            @include flexOption;\r\n            font-size: 40px;\r\n            font-weight: 900;\r\n        }\r\n    }\r\n    .break-field{\r\n        width: 300px;\r\n        height: 200px;\r\n        background-color: red;\r\n        position: absolute;\r\n        top: 100px;\r\n        display: none;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .break-field-button{\r\n        width: 50px;\r\n        height: 30px;\r\n        background-color: black;\r\n    }\r\n}","//Size of pages mixins\r\n@mixin  divSize($width, $height){\r\n    width: $width;\r\n    height: $height;\r\n}\r\n@mixin flexOption {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin  deflautSettings {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n//Colors\r\n$darkGrey: #3f3f3f;\r\n$lightGreen: #8cc534;\r\n$darkGreen: #0ead69;\r\n$oceanBlue: #3bceac;\r\n$white: #ffffff;\r\n\r\n//Backgrounds options\r\n@mixin  gameboadrColorLight{\r\n    background-color: $oceanBlue;\r\n}\r\n@mixin  gameboadrColorDark{\r\n    background-color: $lightGreen;\r\n}\r\n\r\n//Fonts mixins\r\n@mixin  mainFont {\r\n    font-family: 'Baloo Tammudu 2', cursive;\r\n}\r\n@mixin titleFont {\r\n    font-family: 'Do Hyeon', sans-serif;\r\n}\r\n\r\n//Border mixins\r\n@mixin  mainBorder($colorOfBorder) {\r\n    border: 2px solid $colorOfBorder;\r\n}\r\n@mixin mainRadius($radius: 10px){\r\n    border-radius: $radius;\r\n}\r\n\r\n//Games Icons\r\n@mixin iconDeflautPosition{\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n@mixin ticIcon {\r\n    background-image: url('../dist/img/TicTacTouIcon.jpg');\r\n}\r\n@mixin shipIcon {\r\n    background-image: url('../dist/img/BattleShipsIcon.jpg');\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./style/battleships.scss":
/*!********************************!*\
  !*** ./style/battleships.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battleships_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./battleships.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/battleships.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battleships_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_battleships_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./style/mainPage.scss":
/*!*****************************!*\
  !*** ./style/mainPage.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./mainPage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/mainPage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainPage_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainPage_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./style/tictactou.scss":
/*!******************************!*\
  !*** ./style/tictactou.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tictactou_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./tictactou.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/tictactou.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tictactou_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tictactou_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/BattleShips/battleships.ts":
/*!****************************************!*\
  !*** ./src/BattleShips/battleships.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BattleShipsGame = void 0;
var BattleShipsGame = (function () {
    function BattleShipsGame() {
        this.name = 'BattleShips';
        this.createBattleSchipsGame();
    }
    BattleShipsGame.prototype.createBattleSchipsGame = function () {
        var test = document.createElement('div');
        test.classList.add('battleships-div');
        test.innerHTML = 'Tutaj bedzie gra w statki!';
        document.body.appendChild(test);
        var button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-redo-alt"></i>';
        test.appendChild(button);
        button.addEventListener('click', function () { return location.reload(); });
    };
    return BattleShipsGame;
}());
exports.BattleShipsGame = BattleShipsGame;


/***/ }),

/***/ "./src/GameEnum/enum.ts":
/*!******************************!*\
  !*** ./src/GameEnum/enum.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NameOfGames = void 0;
var NameOfGames;
(function (NameOfGames) {
    NameOfGames["TicTacTou"] = "TicTacTou";
    NameOfGames["BattleShips"] = "BattleShips";
})(NameOfGames = exports.NameOfGames || (exports.NameOfGames = {}));


/***/ }),

/***/ "./src/LocalStorage/LocalStorage.ts":
/*!******************************************!*\
  !*** ./src/LocalStorage/LocalStorage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setLS = void 0;
var setLS = (function () {
    function setLS() {
    }
    setLS.prototype.setInLS = function (cells, isGaming) {
        var cellsFromLS = localStorage.getItem('TicTacTou');
        var allCells = JSON.parse(cellsFromLS);
        if (allCells === null) {
            allCells = [];
        }
        if (isGaming === false) {
            allCells.push(cells);
            localStorage.setItem('TicTacTou', JSON.stringify(allCells));
        }
        else {
            localStorage.clear();
        }
    };
    setLS.prototype.getFromLS = function () {
        var cellsFromLS = localStorage.getItem('TicTacTou');
        var allCells = JSON.parse(cellsFromLS);
        return allCells;
    };
    return setLS;
}());
exports.setLS = setLS;


/***/ }),

/***/ "./src/TicTacTou/Board.ts":
/*!********************************!*\
  !*** ./src/TicTacTou/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Board = void 0;
var Cell_1 = __webpack_require__(/*! ./Cell */ "./src/TicTacTou/Cell.ts");
var LocalStorage_1 = __webpack_require__(/*! ../LocalStorage/LocalStorage */ "./src/LocalStorage/LocalStorage.ts");
var Board = (function () {
    function Board(size) {
        var _this = this;
        this.cells = new Array(size);
        this.currentSymbol = 1;
        this.isGameEnd = false;
        var table = document.querySelector('#game-table');
        ;
        var i = 0;
        var _loop_1 = function (r) {
            var row = table.insertRow(r);
            var _loop_2 = function (c) {
                var cell = row.insertCell(c);
                cell.className = 'cell';
                var newCell = new Cell_1.Cell(cell);
                this_1.cells[i] = newCell;
                cell.addEventListener('click', function () { return _this.makeMove(newCell, r, c); }, false);
                i++;
            };
            for (var c = 0; c < size; c++) {
                _loop_2(c);
            }
        };
        var this_1 = this;
        for (var r = 0; r < size; r++) {
            _loop_1(r);
        }
        this.getDataFromLS();
    }
    Board.prototype.getDataFromLS = function () {
        if (new LocalStorage_1.setLS().getFromLS() !== null && new LocalStorage_1.setLS().getFromLS().length > 0) {
            var a = new LocalStorage_1.setLS().getFromLS();
            for (var index = 0; index < a.length; index++) {
                this.cells[a[index].cellId].boolenValue = false;
                if (a[index].currentSymbol === -1) {
                    this.cells[a[index].cellId].htmlElemet.innerHTML = '<i class="far fa-circle"></i>';
                    this.cells[a[index].cellId].symbol = 'O';
                }
                else if (a[index].currentSymbol === 1) {
                    this.cells[a[index].cellId].htmlElemet.innerHTML = '<i class="fas fa-times"></i>';
                    this.cells[a[index].cellId].symbol = 'X';
                }
            }
        }
    };
    Board.prototype.makeMove = function (cell, row, column) {
        if (cell.boolenValue === true && this.isGameEnd !== true) {
            cell.setCellValue(this.currentSymbol, row, column);
            this.currentSymbol = this.currentSymbol === 1 ? -1 : 1;
            cell.boolenValue = false;
            cell.boolenValue === false ? this.checkWin() : null;
        }
        else if (this.isGameEnd === true) {
            alert('Koniec partii!');
        }
        else {
            alert('Komórka zajęta!');
        }
        new LocalStorage_1.setLS().setInLS(cell, this.isGameEnd);
    };
    Board.prototype.checkWin = function () {
        var WinningPosition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (var index = 0; index < 8; index++) {
            var WinExeption = WinningPosition[index];
            var a = WinExeption[0];
            var b = WinExeption[1];
            var c = WinExeption[2];
            var ThreeCells = (this.cells[a].symbol + this.cells[b].symbol + this.cells[c].symbol);
            var Circles = 'OOO';
            var Croses = 'XXX';
            var winner = document.querySelector('.winner-div');
            var symbol = document.querySelector('.symbol');
            if (ThreeCells === Circles) {
                this.isGameEnd = true;
                winner.style.display = 'flex';
                symbol.innerHTML = '<i class="far fa-circle"></i>';
            }
            if (ThreeCells === Croses) {
                this.isGameEnd = true;
                winner.style.display = 'flex';
                symbol.innerHTML = '<i class="fas fa-times"></i>';
            }
            if ((this.cells.find(function (el) { return el.boolenValue === true; }) === undefined)) {
                this.isGameEnd = true;
                winner.style.display = 'flex';
                symbol.innerHTML = 'REMIS!';
            }
        }
    };
    return Board;
}());
exports.Board = Board;


/***/ }),

/***/ "./src/TicTacTou/Cell.ts":
/*!*******************************!*\
  !*** ./src/TicTacTou/Cell.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cell = void 0;
var Cell = (function () {
    function Cell(cell) {
        this.boolenValue = true;
        this.htmlElemet = cell;
    }
    Cell.prototype.setCellValue = function (value, row, column) {
        switch (value) {
            case -1:
                this.htmlElemet.innerHTML = '<i class="far fa-circle"></i>';
                this.symbol = 'O';
                this.currentSymbol = -1;
                break;
            case 1:
                this.htmlElemet.innerHTML = '<i class="fas fa-times"></i>';
                this.symbol = 'X';
                this.currentSymbol = 1;
                break;
            default:
                this.htmlElemet.innerHTML = ' ';
                this.currentSymbol = 0;
                break;
        }
        if (row === 0) {
            this.cellId = row + column;
        }
        else if (row === 1) {
            this.cellId = row + column + 2;
        }
        else {
            this.cellId = row + column + 4;
        }
    };
    return Cell;
}());
exports.Cell = Cell;


/***/ }),

/***/ "./src/TicTacTou/TictTacTouGame.ts":
/*!*****************************************!*\
  !*** ./src/TicTacTou/TictTacTouGame.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicTacTou = void 0;
var Board_1 = __webpack_require__(/*! ./Board */ "./src/TicTacTou/Board.ts");
var TicTacTou = (function () {
    function TicTacTou() {
        this.name = 'TicTacTou';
        this.gameField = document.createElement('div');
        this.gameField.id = 'game-field';
        document.body.appendChild(this.gameField);
        this.gameTable = document.createElement('table');
        this.gameTable.id = 'game-table';
        this.gameField.appendChild(this.gameTable);
        this.controlPanel = document.createElement('div');
        this.controlPanel.classList.add('control-panel');
        this.gameField.appendChild(this.controlPanel);
        this.input = document.createElement('input');
        this.input.id = 'input-size';
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('placeholder', 'Enter the size of gameboard!');
        this.buttonStart = document.createElement('button');
        this.buttonStart.innerHTML = 'Start!';
        this.buttonEnd = document.createElement('button');
        this.buttonEnd.innerHTML = '<i class="fas fa-redo-alt"></i>';
        this.buttonEnd.classList.add('end');
        this.controlPanel.appendChild(this.input);
        this.controlPanel.appendChild(this.buttonStart);
        this.controlPanel.appendChild(this.buttonEnd);
        this.winnerField = document.createElement('div');
        this.winnerField.classList.add('winner-div');
        this.winnerField.innerHTML = 'Winner:';
        this.symbolField = document.createElement('div');
        this.symbolField.classList.add('symbol');
        this.gameField.appendChild(this.winnerField);
        this.winnerField.appendChild(this.symbolField);
        this.breakField = document.createElement('div');
        this.breakField.classList.add('break-field');
        this.gameField.appendChild(this.breakField);
        this.breakFieldYes = document.createElement('button');
        this.breakFieldNo = document.createElement('button');
        this.breakFieldYes.classList.add('break-field-button');
        this.breakFieldNo.classList.add('break-field-button');
        this.breakField.appendChild(this.breakFieldYes);
        this.breakField.appendChild(this.breakFieldNo);
        this.createTicTacTouGame();
    }
    TicTacTou.prototype.createTicTacTouGame = function () {
        var _this = this;
        this.buttonStart.addEventListener('click', function () {
            var inputString = document.querySelector('#input-size');
            var size = parseInt(inputString.value);
            if (size > 2 && size < 6) {
                var board = new Board_1.Board(size);
                board.makeMove;
                _this.input.style.display = 'none';
                _this.buttonStart.style.display = 'none';
                _this.buttonEnd.style.display = 'flex';
            }
            else {
                alert('Zbyt mała lub zbyt duża plansza!');
            }
        });
        this.buttonEnd.addEventListener('click', function () {
            location.reload();
        });
    };
    return TicTacTou;
}());
exports.TicTacTou = TicTacTou;


/***/ }),

/***/ "./src/changePattern.ts":
/*!******************************!*\
  !*** ./src/changePattern.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.changePattern = void 0;
var changePattern = (function () {
    function changePattern(val) {
        this.value = val;
    }
    changePattern.prototype.changeToDark = function () {
        if (this.value === true) {
            return (document.body.setAttribute('pattern', 'lightMode'));
        }
        else {
            return (document.body.setAttribute('pattern', 'darkMode'));
        }
    };
    return changePattern;
}());
exports.changePattern = changePattern;


/***/ }),

/***/ "./dist/img/BattleShipsIcon.jpg":
/*!**************************************!*\
  !*** ./dist/img/BattleShipsIcon.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./dist/img/TicTacTouIcon.jpg":
/*!************************************!*\
  !*** ./dist/img/TicTacTouIcon.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
__webpack_require__(/*! ./../style/mainPage.scss */ "./style/mainPage.scss");
__webpack_require__(/*! ../style/tictactou.scss */ "./style/tictactou.scss");
__webpack_require__(/*! ../style/battleships.scss */ "./style/battleships.scss");
var TictTacTouGame_1 = __webpack_require__(/*! ./TicTacTou/TictTacTouGame */ "./src/TicTacTou/TictTacTouGame.ts");
var battleships_1 = __webpack_require__(/*! ./BattleShips/battleships */ "./src/BattleShips/battleships.ts");
var enum_1 = __webpack_require__(/*! ./GameEnum/enum */ "./src/GameEnum/enum.ts");
var changePattern_1 = __webpack_require__(/*! ./changePattern */ "./src/changePattern.ts");
var Main = (function () {
    function Main() {
        var _this = this;
        this.isPattern = true;
        this.isGameActive = false;
        var patternButton = document.createElement('button');
        patternButton.innerHTML = 'Change pattern!';
        patternButton.classList.add('pattern-button');
        document.body.appendChild(patternButton);
        patternButton.addEventListener('click', function () {
            _this.isPattern = !_this.isPattern;
            new changePattern_1.changePattern(_this.isPattern).changeToDark();
        });
        this.title = document.createElement('h1');
        this.title.innerHTML = 'GAMES PLATFORM';
        document.body.appendChild(this.title);
        this.gamesKeeper = document.createElement('div');
        this.gamesKeeper.classList.add('game-keeper');
        document.body.appendChild(this.gamesKeeper);
        this.ticIcon = document.createElement('div');
        this.ticIcon.classList.add('tic-icon');
        this.gamesKeeper.appendChild(this.ticIcon);
        this.shipsIcon = document.createElement('div');
        this.shipsIcon.classList.add('ships-icon');
        this.gamesKeeper.appendChild(this.shipsIcon);
        this.dispalyGame();
        this.backToMenu();
    }
    Main.prototype.dispalyGame = function () {
        var _this = this;
        this.shipsIcon.addEventListener('click', function () {
            new GameFactory().getGame(enum_1.NameOfGames.BattleShips);
            _this.gamesKeeper.style.display = 'none';
        });
        this.ticIcon.addEventListener('click', function () {
            new GameFactory().getGame(enum_1.NameOfGames.TicTacTou);
            _this.gamesKeeper.style.display = 'none';
        });
    };
    Main.prototype.backToMenu = function () {
        this.title.addEventListener('click', function () { return location.reload(); });
    };
    return Main;
}());
exports.Main = Main;
var GameFactory = (function () {
    function GameFactory() {
    }
    GameFactory.prototype.getGame = function (game) {
        switch (game) {
            case enum_1.NameOfGames.TicTacTou:
                return new TictTacTouGame_1.TicTacTou();
            case enum_1.NameOfGames.BattleShips:
                return new battleships_1.BattleShipsGame();
        }
    };
    return GameFactory;
}());
new Main();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map