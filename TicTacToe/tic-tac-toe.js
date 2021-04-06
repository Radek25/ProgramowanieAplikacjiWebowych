var Sings;
(function (Sings) {
    Sings["X"] = "X";
    Sings["O"] = "O";
})(Sings || (Sings = {}));
var GameBoard = document.querySelector('#game-board');
var BlockArray = [
    null, null, null,
    null, null, null,
    null, null, null
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
var FullBlock = [true, true, true, true, true, true, true, true, true];
//Adding signs to boards
function AddSign(IndexOfBlock, Block) {
    if (TypeOfSignSwitch == true && FullBlock[IndexOfBlock] == true) {
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="far fa-circle"></i>';
        BlockArray[IndexOfBlock] = Sings.O;
        FullBlock[IndexOfBlock] = false;
    }
    else if (FullBlock[IndexOfBlock] == true) {
        TypeOfSignSwitch = !TypeOfSignSwitch;
        Block.innerHTML = '<i class="fas fa-times"></i>';
        BlockArray[IndexOfBlock] = Sings.X;
        FullBlock[IndexOfBlock] = false;
    }
    else {
        console.log('Zajęta!!!');
    }
    CheckWin();
}
//Checking win
function CheckWin() {
    // console.log(BlockArray);
    for (var i = 0; i < BlockArray.length; i++) {
        console.log(BlockArray[i]);
    }
}
