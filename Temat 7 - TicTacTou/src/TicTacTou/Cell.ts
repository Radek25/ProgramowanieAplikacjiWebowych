export class Cell{
    cellValue: number;
    htmlElemet: HTMLElement;
    boolenValue: boolean = true;
    symbol: string;
    cellId: number;
    currentSymbol: number;

    constructor(cell : HTMLElement){
        this.htmlElemet = cell;
    }

    setCellValue(value: number, row: number, column:number){
        switch(value){
            case -1:
                this.htmlElemet.innerHTML = '<i class="far fa-circle"></i>';
                this.symbol = 'O';
                this.currentSymbol = -1;
            break;
            case 1:
                this.htmlElemet.innerHTML = '<i class="fas fa-times"></i>';
                this.symbol = 'X';
                this.currentSymbol = 1;
            break;
            default: 
                this.htmlElemet.innerHTML = ' ';
                this.currentSymbol = 0;
            break;
        }

        if(row === 0){
            this.cellId = row + column;
        }
        else if (row === 1){
            this.cellId = row + column + 2;
        }
        else{
            this.cellId = row + column + 4;
        }
    }
}