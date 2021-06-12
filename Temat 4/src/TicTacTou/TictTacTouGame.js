"use strict";
exports.__esModule = true;
exports.TicTacTou = void 0;
require("../style/main.scss");
var Board_1 = require("./Board");
var TicTacTou = /** @class */ (function () {
    function TicTacTou() {
        this.controlPanel = document.createElement('div');
        this.controlPanel.classList.add('control-panel');
        document.body.appendChild(this.controlPanel);
        this.input = document.createElement('input');
        this.buttonSave = document.createElement('button');
        this.buttonEndGage = document.createElement('button');
        this.buttonEndGage.id = 'end';
        this.controlPanel.appendChild(this.input);
        this.controlPanel.appendChild(this.buttonSave);
        this.controlPanel.appendChild(this.buttonEndGage);
    }
    TicTacTou.prototype.createTicTacTouGame = function () {
        var _this = this;
        this.buttonSave.addEventListener('click', function () {
            var size = parseInt('3');
            if (size > 2 && size < 6) {
                var board = new Board_1.Board(size);
                board.makeMove;
                _this.input.style.display = 'none';
                _this.buttonSave.style.display = 'none';
                _this.buttonEndGage.style.display = 'flex';
            }
            else {
                alert('Zbyt mała lub zbyt duża plansza!');
            }
        });
        this.buttonEndGage.addEventListener('click', function () { return location.reload(); });
    };
    return TicTacTou;
}());
exports.TicTacTou = TicTacTou;
