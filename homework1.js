let cat = 'cat';
let dog = 'dog';

//Your code:
let tempVar = cat;
cat = dog;
dog = tempVar;

//Result:
console.log(cat); // Should equal 'dog'
console.log(dog); // Should equal 'cat'