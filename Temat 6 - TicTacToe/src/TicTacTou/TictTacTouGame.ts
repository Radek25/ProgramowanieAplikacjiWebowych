import { Board } from "./Board";

export function disabled(constructor: Function) {
  constructor.prototype.disabled = true;
}

export function logOnInitGame(
  target: any,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = target[propKey];
  descriptor.value = function (params: any) {
    console.log("init game: ", target.name);
    return originalFn.call(this, params);
  };
}

@disabled
export class TicTacTou {
  name: string;
  gameField: HTMLElement;
  gameTable: HTMLTableElement;
  controlPanel: HTMLElement;
  input: HTMLInputElement;
  buttonStart: HTMLButtonElement;
  buttonEnd: HTMLButtonElement;
  winnerField: HTMLElement;
  symbolField: HTMLElement;

  disabled: boolean;

  constructor() {
    TicTacTou.prototype.name = "TicTacTou";
  }

  @logOnInitGame
  initGame() {
    this.gameField = document.createElement("div");
    this.gameField.id = "game-field";
    document.body.appendChild(this.gameField);
    this.gameTable = document.createElement("table");
    this.gameTable.id = "game-table";
    this.gameField.appendChild(this.gameTable);
    this.controlPanel = document.createElement("div");
    this.controlPanel.classList.add("control-panel");
    this.gameField.appendChild(this.controlPanel);
    this.input = document.createElement("input");
    this.input.id = "input-size";
    this.input.setAttribute("type", "text");
    this.input.setAttribute("placeholder", "Enter the size of gameboard!");
    this.buttonStart = document.createElement("button");
    this.buttonStart.innerHTML = "Start!";
    this.buttonEnd = document.createElement("button");
    this.buttonEnd.innerHTML = '<i class="fas fa-redo-alt"></i>';
    this.buttonEnd.classList.add("end");
    this.controlPanel.appendChild(this.input);
    this.controlPanel.appendChild(this.buttonStart);
    this.controlPanel.appendChild(this.buttonEnd);
    this.winnerField = document.createElement("div");
    this.winnerField.classList.add("winner-div");
    this.winnerField.innerHTML = "Winner:";
    this.symbolField = document.createElement("div");
    this.symbolField.classList.add("symbol");
    this.gameField.appendChild(this.winnerField);
    this.winnerField.appendChild(this.symbolField);
    this.createTicTacTouGame();
  }

  createTicTacTouGame() {
    this.buttonStart.addEventListener("click", () => {
      let inputString = <HTMLInputElement>document.querySelector("#input-size");
      let size: number = parseInt(inputString.value);
      if (size > 2 && size < 6) {
        let board = new Board(size);
        board.makeMove;
        this.input.style.display = "none";
        this.buttonStart.style.display = "none";
        this.buttonEnd.style.display = "flex";
      } else {
        alert("Zbyt mała lub zbyt duża plansza!");
      }
    });

    this.buttonEnd.addEventListener("click", () => location.reload());
  }
}
