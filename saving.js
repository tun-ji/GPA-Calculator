/*
The way this is going to work. There's going to be a block of code in the beginning section that stores the units for each course. There's 
also going to be another block that stores the grade point equivalent of each grade, e.g. A = 5, B = 4, C = 3 etc. There'll be a class for 
'Person' that has the basic biodata and another for 'Student' that'll have the more relevant data for students. It'll extend the person class.
Inside the 'Student' class, there'll be a method for calculating the GPA.
GPA = sum of (grade * grade point) / total number of units
As part of the data that belongs to student, you'll have the grade for each course, then a function to convert it to numbers.
**/
const fs = require('fs');
var registeredStudents = [];
var regStudsLength = registeredStudents.length;
var functionality;
readlineSync = require('readline-sync');

class Person {
    constructor(firstName, lastName, nationality, height, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationality = nationality;
        this.height = height;
        this.birthDate = birthDate;
    }
}

class Student extends Person {
    constructor(firstName, lastName, nationality, height, birthDate, matriculationNumber, admissionDate, department, programOfStudy) {
        super(firstName, lastName, nationality, height, birthDate);
        this.matriculationNumber = matriculationNumber;
        this.admissionDate = admissionDate;
        this.department = department;
        this.programOfStudy = programOfStudy;
        this.grades = []
    }

    getname() {
        return this.firstName + " " + this.lastName;
    }
    /** GPA Calculator Section
     * .addGrades() function to add grades to 'this.grades' array
     * gpaCalculator to calculate using grades
     */
    addGrades() {
        let readlineSync = require('readline-sync');
        let possibleGrades = ['A', 'B', 'C', 'D', 'F']
        let indexEnglish = readlineSync.keyInSelect(possibleGrades, 'What is your English Grade?')
        this.grades.push(possibleGrades[indexEnglish])
        let indexCommunication = readlineSync.keyInSelect(possibleGrades, 'What is your Communication Grade?')
        this.grades.push(possibleGrades[indexCommunication])
        let indexEconomics = readlineSync.keyInSelect(possibleGrades, 'What is your Economics Grade?')
        this.grades.push(possibleGrades[indexEconomics])
        let indexLibrary = readlineSync.keyInSelect(possibleGrades, 'What is your Library Grade?')
        this.grades.push(possibleGrades[indexLibrary])
        let indexTheology = readlineSync.keyInSelect(possibleGrades, 'What is your Theology Grade?')
        this.grades.push(possibleGrades[indexTheology])
        let indexInfoSci = readlineSync.keyInSelect(possibleGrades, 'What is your Information Science Grade?')
        this.grades.push(possibleGrades[indexInfoSci])
        let indexPython = readlineSync.keyInSelect(possibleGrades, 'What is your Python Grade?')
        this.grades.push(possibleGrades[indexPython])
    }

    gpaCalculator() {
        if (this.grades.length === 0) {
             console.log("Please add " + this.getname() + "'s grades first")
        } else {
            let subject = { 'English': 2, 'Communication': 2, 'Economics': 2, 'Library': 2, 'Theology': 3, 'Information Science': 3, 'Python': 3, };
            let gradeunit = { 'A': 5, 'B': 4, 'C': 3, 'D': 2, 'F': 0 };;
            let sumTwoUnits = 0;
            let sumThreeUnits = 0;
            let units = 17
            for (let counter = 0; counter < 4; counter++) {
                let units = gradeunit[this.grades[counter]] * 2;
                sumTwoUnits = sumTwoUnits + units;
            }
            for (let counter = 4; counter < 7; counter++) {
                let units = gradeunit[this.grades[counter]] * 3;
                sumThreeUnits = sumThreeUnits + units;
            }
            let sumGradeUnits = sumThreeUnits + sumTwoUnits;
            let gpa = sumGradeUnits / units;
            console.log(this.firstName + "'s GPA is" + " " + gpa.toFixed(2) );
        }
    }
}

   
do {
    console.log('-------Student Registration System----------')
    console.log('[1]----Register New Students----------------')
    console.log('[2]----View Registered Students in Memory---')
    console.log('[3]----Save Registered Students to File')
    console.log('[4]----Exit---------------------------------')
    functionality = readlineSync.question('--------What would you like to do?-----')
    switch(functionality){
        case '1':
            registerStudent();
            break;
        case '2':
            viewRegisteredStudents();
            break;
        case '3':
            saveStudentsToFile();
            break;
        case '4':
            console.log('Thank you for using this program!');
            break;
    }
} while (functionality != 3);


function newStudent() {
    readlineSync = require('readline-sync');
    var firstName = readlineSync.question('What is your first name?');
    var lastName = readlineSync.question('What is your last name?');
    var nationality = readlineSync.question('What is your nationality?');
    var height = readlineSync.question('How tall are you?');
    var yearOfBirth = readlineSync.question('What year were you born?');
    var monthOfBirth = readlineSync.question('Which month were you born?(0-11)');
    var dayOfBirth = readlineSync.question('What day were you born (1-31)');
    var birthDateRaw = new Date(yearOfBirth,monthOfBirth,dayOfBirth);
    var birthDate = birthDateRaw.toLocaleDateString();
    var matriculationNumber = readlineSync.question('What is your matriculation number?');
    var yearOfAdmission = readlineSync.question('What year were you admitted?');
    var monthOfAdmission = readlineSync.question('What month were you admitted?');
    var dayOfAdmission = readlineSync.question('What day were you admitted?');
    var admissionDateRaw = new Date(yearOfAdmission,monthOfAdmission,dayOfAdmission);
    var admissionDate = admissionDateRaw.toLocaleDateString();
    var department = readlineSync.question('What department are you in?');
    var programOfStudy = readlineSync.question('What is your program of study?');

    var persona = new Student(firstName,lastName,nationality,height,birthDate,matriculationNumber,admissionDate, department, programOfStudy);
    return persona
}

function registerStudent() {
    var nStudent = newStudent()
    console.log('The student' + ' ' + nStudent.firstName + ' ' + 'has been registered!')
    console.log('Add grades for ' + nStudent.firstName)
    nStudent.addGrades();
    nStudent.gpaCalculator();
    registeredStudents.push(nStudent);
}

function viewRegisteredStudents() {
    console.table(registeredStudents);
}

function saveStudentsToFile() {
    const ObjectsToCsv = require('objects-to-csv');
    // If you use "await", code must be inside an asynchronous function:
    (async () => {
        const csv = new ObjectsToCsv(registeredStudents);
   
        // Save to file:
        await csv.toDisk('./Register.csv');
   
        // Return the CSV file as string:
        console.log(await csv.toString());
  })();
}
        


