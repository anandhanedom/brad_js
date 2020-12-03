const person1 = require('./person1');
const person = require('./person');
const Person = require('./person');

const Logger = require('./logger');

// console.log('Hello from Node JS...');
// console.log(person1);
// console.log(person1.name);

// const adam = new Person('Adam', 100);
// console.log(adam);
// console.log(adam.greeting());

const logger = new Logger();

logger.on('message', (data) => {
  console.log(`Called listener: `, data);
});

logger.log('Hello world!');
