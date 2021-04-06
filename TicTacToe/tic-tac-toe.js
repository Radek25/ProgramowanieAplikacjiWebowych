var GameBoard = document.querySelector('#game-board');
var BlockArray = [
    [], [], [],
    [], [], [],
    [], [], []
];
for (var i = 0; i < BlockArray.length; i++) {
    var Block = document.createElement('div');
    Block.setAttribute('id', 'block' + i.toString());
    Block.classList.add('block');
    GameBoard.appendChild(Block);
}
console.log(BlockArray);
