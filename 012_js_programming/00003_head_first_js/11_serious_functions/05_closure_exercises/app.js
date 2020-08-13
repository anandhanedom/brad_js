function makePassword(password) {
  return function (passwordGuess) {
    return passwordGuess === password;
  };
}

var new_password = makePassword("hello2");

// console.log(new_password("hello2"));

function multN(n) {
  return function (m) {
    return m * n;
  };
}

const multiplyBy10 = multN(10);
// console.log(multiplyBy10(8));

// This is a modification of the counter we just created. makeCounter
// takes no arguments, but defines a count variable.It then creates and returns an object
// with one method, increment.This method increments the count variable and returns it.

function makeCounter() {
  var count = 0;

  const obj = {
    increment: function () {
      return ++count;
    },
  };

  return obj;
}

const age = makeCounter();
console.log(age.increment());
console.log(age.increment());
console.log(age.increment());
console.log(age.increment());
