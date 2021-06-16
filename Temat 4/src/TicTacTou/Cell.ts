import { Chars } from "../GameEnum/enum";
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
                this.symbol = Chars.O;
            break;
            case 1:
                this.htmlElemet.innerHTML = '<i class="fas fa-times"></i>';
                this.symbol = Chars.X
            break;
            default: 
                this.htmlElemet.innerHTML = Chars.EMPTY;
            break;
        }
    }
}