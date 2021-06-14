"use strict";
exports.__esModule = true;
exports.Board = void 0;
var Cell_1 = require("./Cell");
var Board = /** @class */ (function () {
    function Board(size) {
        var _this = this;
        this.cells = new Array(size);
        this.currentSymbol = 1;
        this.isGameEnd = false;
        var table = document.querySelector('#game-table');
        ;
        var i = 0;
        for (var r = 0; r < size; r++) {
            var row = table.insertRow(r);
            var _loop_1 = function (c) {
                var cell = row.insertCell(c);
                cell.className = 'cell';
                var newCell = new Cell_1.Cell(cell);
                this_1.cells[i] = newCell;
                cell.addEventListener('click', function () { return _this.makeMove(newCell); }, false);
                i++;
            };
            var this_1 = this;
            for (var c = 0; c < size; c++) {
                _loop_1(c);
            }
        }
    }
    Board.prototype.makeMove = function (cell) {
        if (cell.boolenValue === true && this.isGameEnd !== true) {
            cell.setCellValue(this.currentSymbol);
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
        }
    };
    return Board;
}());
exports.Board = Board;
