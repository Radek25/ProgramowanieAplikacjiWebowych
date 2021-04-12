var Table = /** @class */ (function () {
    function Table() {
        this.ExistTable = false;
        this.Gameboard = document.querySelector('.gameboard');
        this.Button = document.querySelector('#btn');
        this.Table = document.createElement('table');
        this.Table.classList.add('table');
        this.Gameboard.appendChild(this.Table);
    }
    Table.prototype.InputData = function () {
        var _this = this;
        var _a;
        (_a = this.Button) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.Column = parseInt(document.querySelector('#column-value').value);
            _this.Row = parseInt(document.querySelector('#row-value').value);
            _this.ExistTable = true;
            _this.Gameboard.style.display = 'flex';
            console.log(_this.ExistTable);
            _this.CreateTable();
        });
    };
    Table.prototype.CreateTable = function () {
        for (var i = 0; i < this.Row; i++) {
            var row = document.createElement('tr');
            for (var j = 0; j < this.Column; j++) {
                var column = document.createElement('td');
                row.appendChild(column);
            }
            this.Table.appendChild(row);
        }
    };
    return Table;
}());
var A = new Table();
A.InputData();
