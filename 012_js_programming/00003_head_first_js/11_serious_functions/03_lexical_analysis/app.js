var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
  var justAVar = "Just an every day LOCAL";

  function inner() {
    return justAVar;
  }

  return inner;
}

var innerFunction = whereAreYou();
var result = innerFunction();

console.log(result);
console.log("Working from linux");
