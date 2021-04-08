var Sings;
(function (Sings) {
    Sings["X"] = "X";
    Sings["O"] = "O";
})(Sings || (Sings = {}));
var WinningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var GameBoard = document.querySelector('#game-board');
var TypeOfSignSwitch = true;
var FullBlock = [true, true, true, true, true, true, true, true, true];
var BlockArray = ['', '', '', '', '', '', '', '', ''];
var GameWin = false;
var _loop_1 = function (i) {
    var Block = document.createElement('div');
    Block.setAttribute('id', 'block' + i.toString());
    Block.addEventListener('click', function () { return AddSign(i, Block); });
    Block.classList.add('block');
    GameBoard.appendChild(Block);
};
//Creating a signs boards
for (var i = 0; i < 9; i++) {
    _loop_1(i);
}
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
    for (var index = 0; index < 8; index++) {
        var WinExeption = WinningPosition[index];
        var a = WinExeption[0];
        var b = WinExeption[1];
        var c = WinExeption[2];
        var AA = (BlockArray[a] + BlockArray[b] + BlockArray[c]);
        var BB = 'OOO';
        var CC = 'XXX';
        if (AA === BB) {
            alert('Wygrał: O');
        }
        if (AA === CC) {
            alert('Wygrał: X');
        }
    }
    // console.log(BlockArray);
}
