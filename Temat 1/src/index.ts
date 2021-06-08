import '../style/main.scss';

const personeName = 'John';
const div1 = document.createElement('div');
div1.classList.add('div');
document.body.appendChild(div1);
div1.innerHTML = `<h1>Hello ${personeName}!</h1>`

// Rozbudowa zadania

const div2 = document.createElement('div');
div2.classList.add('div');
document.body.appendChild(div2);

class Person {
    Name: string;
    Surname: string;
    Age: number;

    constructor(name: string, surname: string, age: number){
        this.Name = name;
        this.Surname = surname;
        this.Age = age;
    }

    Show(){
        div2.innerHTML = `Witaj ${this.Name} i ${this.Surname} mam ${this.Age} lat!`
    }
}

let p1 = new Person('John', 'Black', 11);
p1.Show();