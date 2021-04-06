var GameBoard = document.querySelector('#game-board');
var BlockArray = [
    [], [], [],
    [], [], [],
    [], [], []
];
var _loop_1 = function (i) {
    var Block = document.createElement('div');
    Block.setAttribute('id', 'block' + i.toString());
    Block.addEventListener('click', function () { return AddSign(i, Block); });
    Block.classList.add('block');
    GameBoard.appendChild(Block);
};
//Creating a signs boards
for (var i = 0; i < BlockArray.length; i++) {
    _loop_1(i);
}
var TypeOfSignSwitch = true;
//Adding signs to boards
function AddSign(IndexOfBlock, Block) {
    if (TypeOfSignSwitch == true) {
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="far fa-circle"></i>';
        BlockArray[IndexOfBlock] = ['O'];
        console.log(IndexOfBlock);
    }
    else {
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="fas fa-times"></i>';
        BlockArray[IndexOfBlock] = ['X'];
        console.log(IndexOfBlock);
    }
    console.log(BlockArray);
}
