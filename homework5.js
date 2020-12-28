//Ex 1

class Car {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    accelerate(amount) {
        this.speed += amount; 
    }
    brake(amount) {
        this.speed -= amount;
    }
    status() {
        return `${this.brand} ${this.model} running at ${this.speed} km/h`;
    }
}

let car = new Car("Renault", "Scenic", 60);

console.log(car);
console.log(car.status());

class CarColor extends Car {
    constructor(brand, model, color) {
        super(brand, model);
        this.color = color;
    }
    carColor () {
        return `${this.brand} ${this.model} has ${this.color} color`;
    }
}

car = new CarColor("Renault", "Scenic", "Red");

console.log(car);
console.log(car.carColor());

// Additional Exercise 1

const numberFormat = array => {
    if (array.some(wrongNumber)) {
        return "Only numbers from 0 to 9 are excepted";
    } else if (array.length != 10) {
        return "Please enter a 10-digit phone number";
    } else {
        let a = array.slice(0, 3).join('');
        let b = array.slice(3, 6).join('');
        let c = array.slice(6).join('');
        return `(${a}) ${b}-${c}`;
    }
    function wrongNumber(element) {
        return typeof element !== "number" || element < 0 || element > 9;
    }
}

let phoneNumber = [0, 7, 3, 0, 5, 1, 7, 9, 7, 5];
console.log(numberFormat(phoneNumber));

// Additional Exercise 2

const toCamelCase = string => {
    let array = [];
    let arrayUpperCase = [];
    const stringSplit = separator => string.split(separator);
    if (stringSplit("-").length > 1) {
        array = stringSplit("-");
    } else if (stringSplit("_").length > 1) {
        array = stringSplit("_");
    } else {
        return `Unknown separator`;
    }
    arrayUpperCase[0] = array[0];
    for (i = 1; i < array.length; i++) {
        arrayUpperCase[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return arrayUpperCase.join('');
}

let string = "the-stealth-warrior";
console.log(toCamelCase(string));