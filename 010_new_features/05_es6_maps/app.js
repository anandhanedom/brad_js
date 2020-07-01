//Maps
const map1 = new Map();

//set keys
const key1 = 'some string',
  key2 = {},
  key3 = function () {};

//Set map values by key
map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key 2');
map1.set(key3, 'Value of key 3');

//Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

//count values
// console.log(map1.size);

//Iterating maps

//Loop using for.. of to get keys and values
// for (let [key, value] of map1) {
//   console.log(`${key}=${value}`);
// }

// //Iterate the keys only
// for (let key of map1.keys()) {
//   console.log(key);
// }

// //Iterate the values only
// for (let key of map1.values()) {
//   console.log(key);
// }

// map1.forEach((value, key) => {
//   console.log(`${key}=${value}`);
// });

//convert to arrays

//create an array of the key and value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

//create an array of values
const valArr = Array.from(map1.values());
console.log(valArr);

//create an array of keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
