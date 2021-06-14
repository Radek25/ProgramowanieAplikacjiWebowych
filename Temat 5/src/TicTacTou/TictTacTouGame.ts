import { Board } from './Board';

export class TicTacTou{
    name: string;
    gameField: HTMLElement;
    gameTable: HTMLTableElement;
    controlPanel: HTMLElement;
    input: HTMLInputElement;
    buttonStart: HTMLButtonElement;
    buttonEnd: HTMLButtonElement;
    winnerField: HTMLElement;
    symbolField: HTMLElement;

    constructor(){
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
        this.buttonEnd. innerHTML = '<i class="fas fa-redo-alt"></i>';
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
        this.createTicTacTouGame();
    }

    createTicTacTouGame(){
        this.buttonStart.addEventListener('click', () => {
            let inputString = <HTMLInputElement>document.querySelector('#input-size');
            let size: number = parseInt(inputString.value);
            if(size > 2 && size < 6){
                let board = new Board(size);
                board.makeMove;
                this.input.style.display = 'none';
                this.buttonStart.style.display = 'none';
                this.buttonEnd.style.display = 'flex';
            }
            else{
                alert('Zbyt mała lub zbyt duża plansza!')
            }
        });

        this.buttonEnd.addEventListener('click', () => location.reload());
    }
}

