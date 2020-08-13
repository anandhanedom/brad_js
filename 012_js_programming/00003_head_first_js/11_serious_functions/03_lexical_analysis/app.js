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

function justSayin(phrase) {
  var ending = "";
  if (beingFunny) {
    ending = " -- I'm just sayin!";
  } else if (notSoMuch) {
    ending = " -- Not so much.";
  }
  alert(phrase + ending);
}
