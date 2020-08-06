var emot = 'XOxxOO';
var hugs = 0;
var kisses = 0;

emot = emot.trim();
// console.log(emot);

emot = emot.toUpperCase();
// console.log(emot);

for (var i = 0; i < emot.length; i++) {
  if (emot.charAt(i) === 'X') {
    hugs++;
  } else if (emot.charAt(i) == 'O') {
    kisses++;
  }
}

console.log('Hugs:', hugs);
console.log('Kisses:', kisses);
