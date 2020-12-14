//Ex. 1.1
const post = {
    title: `Happy holidays`,
    body: `I wish you a merry Christmas and a happy New Year`,
    author: `Alice Cooper`,
    views: 45,
    comment: {
        "comment Body": `Thank you, same to you!`,
        firstName: `Colean`,
        lastName: `May`,
    },
    isLive: true,
    someFunction: () => console.log(`Holidays have started`)
    }
console.log(Object.keys(post).length);
//Ex. 2.1
const isEmpty = (obj) => Object.keys(obj).length > 0 ? false : true;
//Ex. 2.2
function maxNumber (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
//Ex. 3
function totalSalary (obj) {
    let sum = 0;
    for (let key in obj) {
         sum += obj[key];
    }
    return sum;
}
//Ex. 3.1
function maxSalary (obj) {
    let employee = '';
    salary = 0;
    for (let key in obj) {
         if (obj[key] > salary) {
            employee = key;
            salary = obj[key];
         }
    }
    return `${employee} earns the highest salary of ${salary}`;
}
//Ex. 4
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}
//Ex. 5
 function showStars (rows) {
    let star = '*';
    let starNum = star;
    obj = {};
    for (let row = 1; row <= rows; row++ ) {
        obj[row] = starNum;
        starNum += star;
    }
    return Object.values(obj).join(' ');
}