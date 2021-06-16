import {Cell} from './Cell';
import {setLS} from '../LocalStorage/LocalStorage';

export class Board{
    cells: Cell[];
    cellsAll: Cell[];
    currentSymbol: number;
    isGameEnd: boolean;

    constructor (size: number){
        this.cells = new Array(size);
        this.currentSymbol = 1;
        this.isGameEnd = false;
        let table = <HTMLTableElement>document.querySelector('#game-table');;
        let i = 0;
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c); 
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener('click', () => this.makeMove(newCell, r, c), false);
                i++;
            }
        }
        this.getDataFromLS();
    }

    getDataFromLS(){
        if(new setLS().getFromLS() !== null && new setLS().getFromLS().length > 0){
            let a = new setLS().getFromLS();
            for (let index = 0; index < a.length; index++) {
                this.cells[a[index].cellId].boolenValue = false;
                if(a[index].currentSymbol === -1){
                    this.cells[a[index].cellId].htmlElemet.innerHTML = '<i class="far fa-circle"></i>';
                    this.cells[a[index].cellId].symbol = 'O';
                }
                else if(a[index].currentSymbol === 1){
                    this.cells[a[index].cellId].htmlElemet.innerHTML = '<i class="fas fa-times"></i>';
                    this.cells[a[index].cellId].symbol = 'X';
                }
            }
        }
    }

    makeMove(cell: Cell, row: number, column: number): void{

        if(cell.boolenValue === true && this.isGameEnd !== true){
            cell.setCellValue(this.currentSymbol, row, column);
            this.currentSymbol = this.currentSymbol === 1? -1 : 1; 
            cell.boolenValue = false;
            cell.boolenValue === false? this.checkWin() : null;
        }
        else if(this.isGameEnd === true){
            alert('Koniec partii!');
        }
        else{
            alert('Komórka zajęta!');
        }
        new setLS().setInLS(cell, this.isGameEnd);
    }

    checkWin(): void{
        const WinningPosition: number[][] = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (let index = 0; index < 8; index++) {
            const WinExeption = WinningPosition[index];
            let a : number = WinExeption[0];
            let b : number = WinExeption[1];
            let c : number = WinExeption[2];
            let ThreeCells : string = (this.cells[a].symbol+this.cells[b].symbol+this.cells[c].symbol);
            let Circles : string = 'OOO';
            let Croses : string = 'XXX';
    
            let winner = <HTMLElement>document.querySelector('.winner-div');
            let symbol = <HTMLElement>document.querySelector('.symbol');
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
            if((this.cells.find(el => el.boolenValue === true) === undefined)){
                this.isGameEnd = true;
                winner.style.display = 'flex';
                symbol.innerHTML = 'REMIS!'
            }
        }
    }
}