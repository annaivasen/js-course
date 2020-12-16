//Ex. 1
const numbers = [1, -1, 2, 3];

function sum(numbers) {
    let total = 0;
    for (let num of numbers) {
        if (typeof num === 'number') {
           total += num;
       }
   }
   return total;
}

console.log(sum(numbers));


//Ex.2
function arrayFromRange(min, max) {
    let arr = [];
    for (let i = 0; min <= max; i++) {
    arr[i] = min;
    min++;
}
return arr;
}

const numbers = arrayFromRange(1, 4);
console.log(numbers);

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers);


//Ex.3
const numbers = [1, 2, 3, 4, 5];

const maxNumber = getMax(numbers);
console.log(maxNumber) // should display max number from the array 5

function getMax(arr) {
    if (arr.length > 0) {
        let maxNum = -Infinity;
        for (let num of arr) {
            if (typeof num === 'number' && num >= maxNum) {
                maxNum = num;
            }
        }
        return maxNum;
    } else {
        return 'Array is empty';
    }
}


//Ex. 4
let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
];

let topMovies = movies.filter(item => {
    if (item.year == 2019 && item.rating > 4) {
        return item;
    }
});

topMovies.sort((a, b) => b.rating - a.rating);

let topMoviesTitle = topMovies.map(item => {
    return item.title;
});

console.log(topMoviesTitle);