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
        var button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-redo-alt"></i>';
        test.appendChild(button);
        button.addEventListener('click', function () { return location.reload(); });
    };
    return BattleShipsGame;
}());
exports.BattleShipsGame = BattleShipsGame;
