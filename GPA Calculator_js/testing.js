subject = { 'English': 2, 'Communication': 2, 'Economics': 2, 'Library': 2, 'Theology': 3, 'Information Science': 3, 'Python': 3, };
gradeunit = { 'A': 5, 'B': 4, 'C': 3, 'D': 2, 'F': 0 };
grades = []
function addGrades() {
    readlineSync = require('readline-sync');
    possibleGrades = ['A', 'B', 'C', 'D', 'F']
    indexEnglish = readlineSync.keyInSelect(possibleGrades, 'What is your English Grade?')
    grades.push(possibleGrades[indexEnglish])
    indexCommunication = readlineSync.keyInSelect(possibleGrades, 'What is your Communication Grade?')
    grades.push(possibleGrades[indexCommunication])
    indexEconomics = readlineSync.keyInSelect(possibleGrades, 'What is your Economics Grade?')
    grades.push(possibleGrades[indexEconomics])
    var indexLibrary = readlineSync.keyInSelect(possibleGrades, 'What is your Library Grade?')
    grades.push(possibleGrades[indexLibrary])
    var indexTheology = readlineSync.keyInSelect(possibleGrades, 'What is your Theology Grade?')
    grades.push(possibleGrades[indexTheology])
    var indexInfoSci = readlineSync.keyInSelect(possibleGrades, 'What is your Information Science Grade?')
    grades.push(possibleGrades[indexInfoSci])
    var indexPython = readlineSync.keyInSelect(possibleGrades, 'What is your Python Grade?')
    grades.push(possibleGrades[indexPython])
}

function gpaCalculator() {
    let sumTwoUnits = 0;
    let sumThreeUnits = 0;
    let units = 17
    for (let counter = 0; counter < 4; counter++) {
        let units = gradeunit[grades[counter]] * 2;
        sumTwoUnits = sumTwoUnits + units;
    }
    for (let counter = 4; counter < 7; counter++) {
        let units = gradeunit[grades[counter]] * 3;
        sumThreeUnits = sumThreeUnits + units;
    }
    sumGradeUnits = sumThreeUnits + sumTwoUnits;
    let gpa = sumGradeUnits / units;
    return gpa;
}

var csv = grades.toString()
document.write(csv)
addGrades()
console.log(gpaCalculator())