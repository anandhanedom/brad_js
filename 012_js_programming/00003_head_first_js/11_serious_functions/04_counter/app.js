function magicCounter() {
  var count = 0;

  function counter() {
    count++;
    return count;
  }

  return counter;
}

var count = magicCounter();

console.log(count());
console.log(count());
console.log(count()); 
