enum Sings{
    X = 'X',
    O = 'O'
}

const WinningPosition : number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let GameBoard : Element = document.querySelector('#game-board');
let TypeOfSignSwitch : boolean = true;
let FullBlock : boolean[] = [true, true, true, true,true, true, true, true, true];
let BlockArray: string[] = ['', '', '', '', '', '', '', '', ''];
let GameWin : boolean = false;

//Creating a signs boards
for (let i = 0; i < 9; i++) {
       let Block = document.createElement('div');
       Block.setAttribute('id', 'block' + i.toString());
       Block.addEventListener('click', ()=>AddSign(i, Block));
       Block.classList.add('block');
       GameBoard.appendChild(Block);
}

//Adding signs to boards
function AddSign(IndexOfBlock : number, Block : HTMLDivElement){ 
    if (TypeOfSignSwitch == true && FullBlock[IndexOfBlock] == true) {
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="far fa-circle"></i>';
        BlockArray[IndexOfBlock] = Sings.O;
        FullBlock[IndexOfBlock] = false;
    }
    else if (FullBlock[IndexOfBlock] == true){
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="fas fa-times"></i>';
        BlockArray[IndexOfBlock] = Sings.X;
        FullBlock[IndexOfBlock] = false;
    } 
    else{
        console.log('Zajęta!!!');
    }  
    CheckWin();
}

//Checking win
function CheckWin() {
    for (let index = 0; index < 8; index++) {
        const WinExeption = WinningPosition[index];
        let a : number = WinExeption[0];
        let b : number = WinExeption[1];
        let c : number = WinExeption[2];
        let AA : string = (BlockArray[a]+BlockArray[b]+BlockArray[c]);
        let BB : string = 'OOO';
        let CC : string = 'XXX';
        if (AA === BB) {
            alert('Wygrał: O')
        }
        if (AA === CC) {
            alert('Wygrał: X')
        }
    }
    // console.log(BlockArray);
}