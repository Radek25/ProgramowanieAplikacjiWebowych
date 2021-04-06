enum Sings{
    X = 'X',
    O = 'O'
}

let GameBoard : Element = document.querySelector('#game-board');

let BlockArray: string[][] = [
    [], [], [],
    [], [], [],
    [], [], []
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
//Adding signs to boards
function AddSign(IndexOfBlock : number, Block : HTMLDivElement){
    if (TypeOfSignSwitch == true) {
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="far fa-circle"></i>';
        BlockArray[IndexOfBlock] = [Sings.O];
        console.log(IndexOfBlock);
    }
    else{
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="fas fa-times"></i>';
        BlockArray[IndexOfBlock] = [Sings.X];
        console.log(IndexOfBlock);
    }
    console.log(BlockArray);
}
