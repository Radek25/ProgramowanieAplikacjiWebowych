/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client.ts":
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Client = void 0;
var Client = (function () {
    function Client() {
        var _this = this;
        this.socket = null;
        this.sendMessage = function (msg) {
            _this.socket.send(msg);
        };
    }
    Client.prototype.init = function () {
        this.socket = new WebSocket("ws://localhost:8080");
        this.socket.onopen = function (e) {
        };
        this.socket.onmessage = function (event) {
            var messages = document.querySelector("#messages");
            var item = document.createElement("div");
            item.innerText = event.data;
            messages === null || messages === void 0 ? void 0 : messages.appendChild(item);
        };
    };
    return Client;
}());
exports.Client = Client;


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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var client_1 = __webpack_require__(/*! ./client */ "./src/client.ts");
console.log("jebać");
var client = new client_1.Client();
client.init();
var btn = document.querySelector("#send");
var input = document.querySelector("#message");
btn.addEventListener("click", function () {
    client.sendMessage(input.value);
});

})();

/******/ })()
;
//# sourceMappingURL=index.js.map