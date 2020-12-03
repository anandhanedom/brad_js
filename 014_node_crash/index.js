const person1 = require('./person1');
const person = require('./person');
const Person = require('./person');

// console.log('Hello from Node JS...');
// console.log(person1);
// console.log(person1.name);

const adam = new Person('Adam', 100);
console.log(adam);
console.log(adam.greeting());
