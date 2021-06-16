import './../style/main.scss';
import '../style/tictactou.scss';
import '../style/battleships.scss';
import { TicTacTou } from './TicTacTou/TictTacTouGame';
import { BattleShipsGame } from './BattleShips/battleships';
import {NameOfGames} from './GameEnum/enum'


class Main {
    title: HTMLElement; 
    gamesKeeper: HTMLElement;
    ticIcon: HTMLElement;
    shipsIcon: HTMLElement;
    isGameActive: boolean;

    constructor(){
        this.isGameActive = false;
        this.title = document.createElement('h1');
        this.title.innerHTML = 'GAMES PLATFORM'
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

    dispalyGame(){
        let game;
        this.shipsIcon.addEventListener('click', () => {
            game = new GameFactory();
            game.getGame(NameOfGames.BattleShips);
            this.gamesKeeper.style.display = 'none';
        })
        this.ticIcon.addEventListener('click', () => {
            game = new GameFactory();
            game.getGame(NameOfGames.TicTacTou);
            this.gamesKeeper.style.display = 'none';
               
        })
    }
    backToMenu(){
        this.title.addEventListener('click', () => location.reload());
    }
}

class GameFactory{
    getGame(game: NameOfGames){
        let Game;
        switch(game){
            case NameOfGames.TicTacTou:
                Game = new TicTacTou();
                Game.createTicTacTouGame();
            break;
            case NameOfGames.BattleShips:
                Game = new BattleShipsGame();
                Game.createBattleSchipsGame();
            break;
            default:
                alert('Brak gry!');
            break;
        }
    }
}

let main = new Main();
main.dispalyGame();
main.backToMenu();
