//Strings
const name1 = 'Jeff';
const name2 = new String('Jeff');

// console.log(name1);
// name2.foo = 'bar';
// console.log(name2);

// console.log(typeof name1);
// console.log(typeof name2);

// if (name2 === 'Jeff') {
//   console.log('yes!');
// } else {
//   console.log('No');
// }

//Numeber
const num1 = 5;
const num2 = new Number(5);

// console.log(num1);
// console.log(typeof num2);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);
// console.log(bool2);
// console.log(typeof bool2);

//Functions
const getSumOne = function (x, y) {
  return x + y;
};

const getSumTwo = new Function('x', 'y', 'return 1+1');

// console.log(getSumTwo(1, 1));

//Objects
const john1 = {
  name: 'John',
};

const john2 = new Object({ name: 'John' });
// console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log(arr2);

//Regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re2);
