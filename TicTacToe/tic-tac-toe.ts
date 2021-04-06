let GameBoard : Element = document.querySelector('#game-board');

let BlockArray = [
    [], [], [],
    [], [], [],
    [], [], []
];


for (let i = 0; i < BlockArray.length; i++) {
       let Block = document.createElement('div');
       Block.setAttribute('id', 'block' + i.toString());
       Block.classList.add('block');
       GameBoard.appendChild(Block);
}
console.log(BlockArray);