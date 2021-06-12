"use strict";
exports.__esModule = true;
exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(cell) {
        this.boolenValue = true;
        this.htmlElemet = cell;
    }
    Cell.prototype.setCellValue = function (value) {
        switch (value) {
            case -1:
                this.htmlElemet.innerHTML = '<i class="far fa-circle"></i>';
                this.symbol = 'O';
                break;
            case 1:
                this.htmlElemet.innerHTML = '<i class="fas fa-times"></i>';
                this.symbol = 'X';
                break;
            default:
                this.htmlElemet.innerHTML = ' ';
                break;
        }
    };
    return Cell;
}());
exports.Cell = Cell;
