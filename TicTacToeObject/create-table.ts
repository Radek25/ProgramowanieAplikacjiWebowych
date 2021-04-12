class Table{
    Column : number;
    Row : number;
    Gameboard : HTMLLIElement;
    Button : HTMLButtonElement;
    Table : HTMLElement;

    constructor(){
        this.Gameboard = document.querySelector('.gameboard');
        this.Button = document.querySelector('#btn');
        this.Table = document.createElement('table');
        this.Table.classList.add('table');
        this.Gameboard.appendChild(this.Table);
    }

    InputData(){
        this.Button?.addEventListener('click', ()=> {
            this.Column = parseInt((document.querySelector('#column-value') as HTMLInputElement).value);
            this.Row = parseInt((document.querySelector('#row-value') as HTMLInputElement).value);
            this.Gameboard.style.display = 'flex';
            this.CreateTable();
        });
    }

    CreateTable(){
        for (let i = 0; i < this.Row; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < this.Column; j++) {
                let column = document.createElement('td');
                row.appendChild(column);
            }
            this.Table.appendChild(row);
        }
    }
}

let A : Table = new Table();
A.InputData();