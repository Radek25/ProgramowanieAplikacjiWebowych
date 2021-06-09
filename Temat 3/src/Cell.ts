export class Cell{
    cellValue: number;
    htmlElemet: HTMLElement;
    boolenValue: Boolean = true;
    symbol: string;

    constructor(cell : HTMLElement){
        this.htmlElemet = cell;
    }

    setCellValue(value: number){
        switch(value){
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
    }
}