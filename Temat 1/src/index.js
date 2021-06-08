"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
require("../style/main.scss");
var personeName = 'John';
var div1 = document.createElement('div');
div1.classList.add('div');
document.body.appendChild(div1);
div1.innerHTML = "<h1>Hello " + personeName + "!</h1>";
// Rozbudowa zadania
var div2 = document.createElement('div');
div2.classList.add('div');
document.body.appendChild(div2);
var PersonTaskOne = /** @class */ (function () {
    function PersonTaskOne(name, surname, age) {
        this.Name = name;
        this.Surname = surname;
        this.Age = age;
    }
    PersonTaskOne.prototype.Show = function () {
        div2.innerHTML = "Witaj " + this.Name + " i " + this.Surname + " mam " + this.Age + " lat!";
    };
    return PersonTaskOne;
}());
var p1 = new PersonTaskOne('John', 'Black', 11);
p1.Show();
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log(person.name + " " + person.surname + " " + person.age + " " + person.role);
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    return persons.filter(function (person) { return person.name == criteria.name || person.surname == criteria.surname || person.age == criteria.age || person.role == criteria.role; });
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
console.log('***Zadanie1***');
users.forEach(logPerson);
admins.forEach(logPerson);
console.log('--------------------------');
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
console.log('***Zadanie2***');
var usersAndAdmins = __spreadArray(__spreadArray([], users), admins);
usersAndAdmins.forEach(function (usersAndAdmins) { return logPerson(usersAndAdmins); });
console.log('--------------------------');
//3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log('***Zadanie3***');
var filteredAge = usersAndAdmins.filter(function (usersAndAdmins) { return usersAndAdmins.age > 25; });
filteredAge.forEach(logPerson);
console.log('--------------------------');
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log('***Zadanie4***');
var filteredName = filterPersons(usersAndAdmins, { name: 'Adam' });
filteredName.forEach(logPerson);
console.log('--------------------------');
