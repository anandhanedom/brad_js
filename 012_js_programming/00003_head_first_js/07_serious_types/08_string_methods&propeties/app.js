//Length and char at
var input = 'jenny@wickedlysmart.com';
for (var i = 0; i < input.length; i++) {
  if (input.charAt(i) === '@') {
    console.log("There's an @ sign at index " + i);
  }
}

//Index of
var phrase = 'the cat in the hat';
var index = phrase.indexOf('cat');
console.log("there's a cat sitting at index " + index);

index = phrase.indexOf('the', 5); //skip the first "the" by starting from index 5
console.log("there's a the sitting at index " + index);

//Substring
var data = 'name|phone|address';
var val = data.substring(5, 10);
console.log('Substring is ' + val);

//Split
var data = 'name|phone|address';
var vals = data.split('|');
console.log('Split array is ', vals);
