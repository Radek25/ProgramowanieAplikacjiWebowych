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

class PersonTaskOne {
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

let p1 = new PersonTaskOne('John', 'Black', 11);
p1.Show();

//Zadanie 2

interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name: string;
    surname: string;
    age: number;
    role: string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
        console.log(`${person.name} ${person.surname} ${person.age} ${person.role}`)
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
        return persons.filter(person => person.name == criteria.name || person.surname == criteria.surname || person.age == criteria.age || person.role == criteria.role);
    }
    
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    console.log('***Zadanie1***')
    users.forEach(logPerson);
    admins.forEach(logPerson);
    console.log('--------------------------')
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    console.log('***Zadanie2***')
    let usersAndAdmins: Person[] = [...users, ...admins];
    usersAndAdmins.forEach(usersAndAdmins => logPerson(usersAndAdmins));
    console.log('--------------------------')
    //3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    console.log('***Zadanie3***')
    const filteredAge = usersAndAdmins.filter(usersAndAdmins => usersAndAdmins.age > 25);
    filteredAge.forEach(logPerson);
    console.log('--------------------------')
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    console.log('***Zadanie4***');
    const filteredName = filterPersons(usersAndAdmins, {name: 'Adam'});
    filteredName.forEach(logPerson);
    console.log('--------------------------')