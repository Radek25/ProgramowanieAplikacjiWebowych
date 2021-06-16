import { Cell } from '../TicTacTou/Cell';

export class setLS{
      
    setInLS(cells : Cell, isGaming: boolean): void{
        let cellsFromLS = <string>localStorage.getItem('TicTacTou');
        let allCells = <Cell[]>JSON.parse(cellsFromLS);
        if(allCells === null){
            allCells = [];
        } 
        if(isGaming === false){
            allCells.push(cells);
            localStorage.setItem('TicTacTou', JSON.stringify(allCells));
        }
        else{
            localStorage.clear();
        }
    }
    getFromLS(): Cell[]{
        let cellsFromLS = <string>localStorage.getItem('TicTacTou');
        let allCells = <Cell[]>JSON.parse(cellsFromLS);
        return allCells;
    }
}