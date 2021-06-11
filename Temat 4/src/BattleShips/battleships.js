"use strict";
exports.__esModule = true;
exports.BattleShipsGame = void 0;
var BattleShipsGame = /** @class */ (function () {
    function BattleShipsGame() {
        this.name = 'BattleShips';
    }
    BattleShipsGame.prototype.createBattleSchipsGame = function () {
        var test = document.createElement('div');
        test.classList.add('battleships-div');
        test.innerHTML = 'Tutaj bedzie gra w statki!';
        document.body.appendChild(test);
    };
    return BattleShipsGame;
}());
exports.BattleShipsGame = BattleShipsGame;
