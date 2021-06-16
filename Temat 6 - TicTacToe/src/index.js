"use strict";
exports.__esModule = true;
exports.Main = void 0;
require("./../style/mainPageLight.scss");
require("../style/tictactou.scss");
require("../style/battleships.scss");
var TictTacTouGame_1 = require("./TicTacTou/TictTacTouGame");
var battleships_1 = require("./BattleShips/battleships");
var enum_1 = require("./GameEnum/enum");
var Main = /** @class */ (function () {
    function Main() {
        this.a.val;
        this.isGameActive = false;
        this.title = document.createElement('h1');
        this.title.innerHTML = 'GAMES PLATFORM';
        this.title.classList.add('title');
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
    }
    Main.prototype.dispalyGame = function () {
        var _this = this;
        var game;
        this.shipsIcon.addEventListener('click', function () {
            game = new GameFactory();
            game.getGame(enum_1.NameOfGames.BattleShips);
            _this.gamesKeeper.style.display = 'none';
        });
        this.ticIcon.addEventListener('click', function () {
            game = new GameFactory();
            game.getGame(enum_1.NameOfGames.TicTacTou);
            _this.gamesKeeper.style.display = 'none';
        });
    };
    Main.prototype.backToMenu = function () {
        this.title.addEventListener('click', function () { return location.reload(); });
    };
    return Main;
}());
exports.Main = Main;
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.prototype.getGame = function (game) {
        var Game;
        switch (game) {
            case enum_1.NameOfGames.TicTacTou:
                Game = new TictTacTouGame_1.TicTacTou();
                Game.createTicTacTouGame();
                break;
            case enum_1.NameOfGames.BattleShips:
                Game = new battleships_1.BattleShipsGame();
                Game.createBattleSchipsGame();
                break;
            default:
                alert('Brak gry!');
                break;
        }
    };
    return GameFactory;
}());
var main = new Main();
main.dispalyGame();
main.backToMenu();
