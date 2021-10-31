// used to figure out creating new 'people'
registeredPeople = []

class Person {
    constructor(firstName, lastName, nationality, height) {
        this.name = {
            firstName,
            lastName
        };
        this.lastName = lastName;
        this.nationality = nationality;
        this.height = height;
    }   
}

function newPerson() {
    readlineSync = require('readline-sync');
    var firstName = readlineSync.question('What is your first name?');
    var lastName = readlineSync.question('What is your last name?');
    var nationality = readlineSync.question('What is your nationality?');
    
    var persona = new Person(firstName,lastName,nationality);
    return persona
}

function registerPerson() {
    var nPerson = newPerson()
    registeredPeople.push(nPerson);
    console.log('You just registered ' + nPerson.name.firstName)
}

registerPerson();
console.log(registeredPeople);  
