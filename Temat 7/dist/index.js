/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Guid = void 0;
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
exports.Guid = Guid;


/***/ }),

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Note = void 0;
var guid_1 = __webpack_require__(/*! ./guid */ "./src/guid.ts");
var Note = (function () {
    function Note(title, content) {
        this.id = guid_1.Guid.newGuid();
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
    }
    return Note;
}());
exports.Note = Note;


/***/ }),

/***/ "./src/noteboard.ts":
/*!**************************!*\
  !*** ./src/noteboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoteBoard = void 0;
var note_1 = __webpack_require__(/*! ./note */ "./src/note.ts");
var sessionstotagestore_1 = __webpack_require__(/*! ./sessionstotagestore */ "./src/sessionstotagestore.ts");
var NoteBoard = (function () {
    function NoteBoard() {
        this.storage = new sessionstotagestore_1.SessionStorageStore();
        this.addTitleInput();
        this.addContentInput();
        this.addButton();
        this.notesContainer = (document.createElement('div'));
        document.body.append(this.notesContainer);
    }
    NoteBoard.prototype.addTitleInput = function () {
        var div = (document.createElement('div'));
        var span = (document.createElement('span'));
        span.textContent = "Title:";
        var titleInput = (document.createElement('input'));
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        div.appendChild(span);
        div.appendChild(titleInput);
        document.body.appendChild(div);
    };
    NoteBoard.prototype.addContentInput = function () {
        var div = (document.createElement('div'));
        var span = (document.createElement('span'));
        span.textContent = "Content:";
        var contentInput = (document.createElement('textarea'));
        contentInput.setAttribute('id', 'content');
        div.appendChild(span);
        div.appendChild(contentInput);
        document.body.appendChild(div);
    };
    NoteBoard.prototype.addButton = function () {
        var _this = this;
        var div = (document.createElement('div'));
        var addButton = (document.createElement('button'));
        addButton.textContent = "Add";
        addButton.addEventListener('click', function () {
            var title = document.getElementById('title').value;
            var content = document.getElementById('content').value;
            _this.storage.addNote(new note_1.Note(title, content));
            _this.refreshList();
        });
        div.appendChild(addButton);
        document.body.appendChild(div);
    };
    NoteBoard.prototype.refreshList = function () {
        var _this = this;
        this.notesContainer.innerHTML = '';
        var notes = this.storage.getNotes();
        if (!notes)
            return;
        notes.forEach(function (item) {
            var titleDiv = (document.createElement('div'));
            titleDiv.innerHTML = item.title;
            var contentDiv = (document.createElement('div'));
            contentDiv.innerHTML = item.content;
            var removeBtn = (document.createElement('button'));
            removeBtn.textContent = "Remove";
            removeBtn.setAttribute('data-id', item.id.toString());
            removeBtn.addEventListener('click', function (e) {
                var id = e.target.getAttribute('data-id');
                _this.storage.deleteNote(id);
                _this.refreshList();
            });
            _this.notesContainer.appendChild(titleDiv);
            _this.notesContainer.appendChild(contentDiv);
            _this.notesContainer.appendChild(removeBtn);
            _this.notesContainer.appendChild(document.createElement('hr'));
        }, this);
    };
    return NoteBoard;
}());
exports.NoteBoard = NoteBoard;


/***/ }),

/***/ "./src/sessionstotagestore.ts":
/*!************************************!*\
  !*** ./src/sessionstotagestore.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionStorageStore = void 0;
var SessionStorageStore = (function () {
    function SessionStorageStore() {
    }
    SessionStorageStore.prototype.deleteNote = function (id) {
        var notes = sessionStorage.getItem('notes');
        var allNotes;
        allNotes = JSON.parse(notes);
        var newNotes = allNotes.filter(function (el) { return el.id != id; });
        sessionStorage.setItem('notes', JSON.stringify(newNotes));
    };
    SessionStorageStore.prototype.addNote = function (note) {
        var notes = sessionStorage.getItem('notes');
        var allNotes;
        allNotes = JSON.parse(notes);
        if (allNotes === null) {
            allNotes = [];
        }
        allNotes.push(note);
        sessionStorage.setItem('notes', JSON.stringify(allNotes));
    };
    SessionStorageStore.prototype.getNotes = function () {
        var notes = sessionStorage.getItem('notes');
        return JSON.parse(notes);
    };
    return SessionStorageStore;
}());
exports.SessionStorageStore = SessionStorageStore;


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
var noteboard_1 = __webpack_require__(/*! ./noteboard */ "./src/noteboard.ts");
var board = new noteboard_1.NoteBoard();
board.refreshList();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map