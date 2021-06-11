export class BattleShipsGame{
    name: string;

    constructor(){
        this.name = 'BattleShips';
    }

    createBattleSchipsGame(){
        let test = <HTMLElement>document.createElement('div');
        test.classList.add('battleships-div');
        test.innerHTML = 'Tutaj bedzie gra w statki!';
        document.body.appendChild(test);
    }
}