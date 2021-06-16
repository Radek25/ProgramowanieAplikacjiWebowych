enum Chars {
  O = "O",
  X = "X",
  EMPTY = " ",
}
export class Cell {
  public cellValue: number;
  public htmlElemet: HTMLElement;
  public boolenValue: Boolean = true;
  public symbol: string;

  constructor(cell: HTMLElement) {
    this.htmlElemet = cell;
  }

  public setCellValue(value: number) {
    switch (value) {
      case -1:
        this.htmlElemet.innerHTML = '<i class="far fa-circle"></i>';
        this.symbol = Chars.O;
        break;
      case 1:
        this.htmlElemet.innerHTML = '<i class="fas fa-times"></i>';
        this.symbol = Chars.X;
        break;
      default:
        this.htmlElemet.innerHTML = Chars.EMPTY;
        break;
    }
  }
}
