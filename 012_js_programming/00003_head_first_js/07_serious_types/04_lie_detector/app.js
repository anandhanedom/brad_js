function lieDetectorTest() {
  var lies = 0;
  var stolenDiamond = {};
  if (stolenDiamond) {
    //lie
    console.log('You stole the diamond');
    lies++;
  }
  var car = {
    keysInPocket: null,
  };

  if (car.keysInPocket) {
    //not a lie
    console.log('Uh oh, guess you stole the car!');
    lies++;
  }
  if (car.emptyGasTank) {
    //not a lie
    console.log('You drove the car after you stole it!');
    lies++;
  }
  var foundYouAtTheCrimeScene = [];
  if (foundYouAtTheCrimeScene) {
    //a lie
    console.log('A sure sign of guilt');
    lies++;
  }
  if (foundYouAtTheCrimeScene[0]) {
    //not a lie
    console.log('Caught with a stolen item!');
    lies++;
  }
  var yourName = ' ';
  if (yourName) {
    //a lie
    console.log('Guess you lied about your name');
    lies++;
  }
  return lies;
}
var numberOfLies = lieDetectorTest();
console.log('You told ' + numberOfLies + ' lies!');
if (numberOfLies >= 3) {
  console.log('Guilty as charged');
}
