enum Sings{
    X = 'X',
    O = 'O'
}

let GameBoard : Element = document.querySelector('#game-board');

let BlockArray: string[] = [
    null, null, null,
    null, null, null,
    null, null, null
];

//Creating a signs boards
for (let i = 0; i < BlockArray.length; i++) {
       let Block = document.createElement('div');
       Block.setAttribute('id', 'block' + i.toString());
       Block.addEventListener('click', ()=>AddSign(i, Block));
       Block.classList.add('block');
       GameBoard.appendChild(Block);
}

let TypeOfSignSwitch : boolean = true;
let FullBlock : boolean[] = [true, true, true, true,true, true, true, true, true];
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
    // console.log(BlockArray);
    for (let i = 0; i < BlockArray.length; i++) {
        console.log(BlockArray[i]);
    }
}