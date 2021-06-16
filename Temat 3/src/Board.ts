import {Cell} from './Cell';

export class Board{
    protected cells: Cell[];
    protected currentSymbol: number = 1;

    constructor (size: number){
        this.cells = new Array(size);
        let table = <HTMLTableElement>document.querySelector('#tictactoe');
        let i = 0;
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c); 
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener('click', () => this.makeMove(newCell), false);
                i++;
            }
        }
    }

    public makeMove(cell: Cell): void{
        if(cell.boolenValue === true){
            cell.setCellValue(this.currentSymbol);
            this.currentSymbol = this.currentSymbol === 1? -1 : 1; 
            cell.boolenValue = false;
            cell.boolenValue === false? this.checkWin() : null
        }
        else{
            alert('Komórka zajęta!');
        }
    }

    public checkWin(): void{
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
    
            let winner: HTMLElement = document.querySelector('#winner-div');
            let symbol: HTMLElement = document.querySelector('.symbol');
            if (ThreeCells === Circles) {
                winner.style.display = 'flex';
                symbol.innerHTML = '<i class="far fa-circle"></i>';
            }
            if (ThreeCells === Croses) {
                winner.style.display = 'flex';
                symbol.innerHTML = '<i class="fas fa-times"></i>';
            }
        }
    }
}