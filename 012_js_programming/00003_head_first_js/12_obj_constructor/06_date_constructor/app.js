//Calling Date constructor
var now = new Date();

var dateString = now.toString();

var theYear = now.getFullYear();

var theDayOfWeek = now.getDay();

var birthday = new Date('June 1, 1998');

var birthday = new Date('May 1, 1983 09:45 am');

// console.log(birthday);

var emptyArray = new Array();
emptyArray[0] = 100;

var evenNumbers = new Array(3);
evenNumbers[0] = 2;
evenNumbers[1] = 4;
evenNumbers[2] = 6;

// console.log(evenNumbers);

evenNumbers.reverse();

// console.log(evenNumbers);

var eString = evenNumbers.join(' - ');

console.log(eString);

var areAllEven = evenNumbers.every(function (x) {
  return x % 2 === 0;
});

console.log(areAllEven);
