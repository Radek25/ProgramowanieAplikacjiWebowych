"use strict";
exports.__esModule = true;
exports.TicTacTou = void 0;
var Board_1 = require("./Board");
var TicTacTou = /** @class */ (function () {
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
        this.buttonEnd.addEventListener('click', function () { return location.reload(); });
    };
    return TicTacTou;
}());
exports.TicTacTou = TicTacTou;
