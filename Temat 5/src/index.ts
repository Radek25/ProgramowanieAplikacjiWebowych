import './../style/mainPage.scss';
import '../style/tictactou.scss';
import '../style/battleships.scss';
import { TicTacTou } from './TicTacTou/TictTacTouGame';
import { BattleShipsGame } from './BattleShips/battleships';
import {NameOfGames} from './GameEnum/enum'
import { changePattern } from './changePattern';

export class Main {
    title: HTMLElement;
    gamesKeeper: HTMLElement;
    ticIcon: HTMLElement;
    shipsIcon: HTMLElement;
    isGameActive: boolean;
    isPattern: boolean;

    constructor(){
        this.isPattern = true;
        this.isGameActive = false;
        let patternButton = <HTMLButtonElement>document.createElement('button');
        patternButton. innerHTML = 'Change pattern!';
        patternButton.classList.add('pattern-button');
        document.body.appendChild(patternButton);
        patternButton.addEventListener('click', () =>{
            this.isPattern = !this.isPattern;
            new changePattern(this.isPattern).changeToDark();
        });
        
        this.title = document.createElement('h1');
        this.title.innerHTML = 'GAMES PLATFORM'
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
        
        this.dispalyGame();
        this.backToMenu();
    }

    dispalyGame(){
        this.shipsIcon.addEventListener('click', () => {
           new GameFactory().getGame(NameOfGames.BattleShips);
            this.gamesKeeper.style.display = 'none';
        })
        this.ticIcon.addEventListener('click', () => {
            new GameFactory().getGame(NameOfGames.TicTacTou);
            this.gamesKeeper.style.display = 'none';
        })
    }
    backToMenu(){
        this.title.addEventListener('click', () => location.reload());
    }
}

class GameFactory{
    getGame(game: NameOfGames) : TicTacTou | BattleShipsGame{
        switch(game){
            case NameOfGames.TicTacTou:
                return new TicTacTou();
            case NameOfGames.BattleShips:
                return new BattleShipsGame();
        }
    }
}

new Main();
