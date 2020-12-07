//Task 1
let a, b;
let result = a + b < 10 ? 'Few' : 'Many';

//Task 2
let age;
if (age >= 18 && age <= 90) {
    console.log(true);
} else {
    console.log(false);
}

//Task 3
const firstName = prompt(`Please, enter your first name`);
alert(`Hello, ${firstName}, nice to meet you.`);
const yearOfBirth = prompt(`Please enter your birthday year`);
alert(`You're ${2020 - yearOfBirth} years old.`);

//Task 4
let gradeNum;
if (gradeNum < 60) {
    console.log('F');
} else if (gradeNum >= 60 && gradeNum < 70) {
    console.log('D');
} else if (gradeNum >= 70 && gradeNum < 80) {
    console.log('C');
} else if (gradeNum >= 80 && gradeNum < 90) {
    console.log('B');
} else if (gradeNum >= 90 && gradeNum <= 100) {
    console.log('A');
}