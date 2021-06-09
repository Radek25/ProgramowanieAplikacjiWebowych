import '../style/main.scss';
import { Board } from './Board';

let input : HTMLInputElement = document.querySelector('input'); 
let buttonSave: HTMLElement = document.querySelector('#save'); 
let buttonEndGage: HTMLElement = document.querySelector('#end'); 

buttonSave.addEventListener('click', () => {
    let size: number= parseInt(input.value);
    if(size > 2 && size < 6){
        let board = new Board(size);
        board.makeMove;
        input.style.display = 'none';
        buttonSave.style.display = 'none';
        buttonEndGage.style.display = 'flex';
    }
    else{
        alert('Zbyt mała lub zbyt duża plansza!')
    }
});

buttonEndGage.addEventListener('click', () => location.reload());


