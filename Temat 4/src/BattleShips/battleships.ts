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
        let button = <HTMLElement>document.createElement('button');
        button.innerHTML = '<i class="fas fa-redo-alt"></i>';
        test.appendChild(button);

        button.addEventListener('click', () => location.reload());
    }
}