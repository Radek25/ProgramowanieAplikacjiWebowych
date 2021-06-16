import { logOnInitGame } from "../TicTacTou/TictTacTouGame";

export class BattleShipsGame {
  name: string;
  disabled: boolean;

  constructor() {
    BattleShipsGame.prototype.name = "BattleShips";
  }

  @logOnInitGame
  initGame() {
    this.createBattleSchipsGame();
  }

  createBattleSchipsGame() {
    let test = <HTMLElement>document.createElement("div");
    test.classList.add("battleships-div");
    test.innerHTML = "Tutaj bedzie gra w statki!";
    document.body.appendChild(test);
    let button = <HTMLElement>document.createElement("button");
    button.innerHTML = '<i class="fas fa-redo-alt"></i>';
    test.appendChild(button);

    button.addEventListener("click", () => location.reload());
  }
}


