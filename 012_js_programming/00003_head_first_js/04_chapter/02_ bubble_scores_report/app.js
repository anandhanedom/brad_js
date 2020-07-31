var scores = [
  60,
  50,
  60,
  58,
  54,
  54,
  58,
  50,
  52,
  54,
  48,
  69,
  34,
  55,
  51,
  52,
  44,
  51,
  69,
  64,
  66,
  55,
  52,
  61,
  46,
  31,
  57,
  52,
  44,
  18,
  41,
  53,
  55,
  61,
  51,
  44,
];

function printAndGetHightScore() {
  var output;
  var highScore = 0;

  for (var i = 0; i < scores.length; i++) {
    output = 'Bubble solution #' + i + ' score: ' + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }

  return highScore;
}

function getBestResults(highScore, scores) {
  var bestSolutions = [];
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

// var i = 0;

// while (i < scores.length) {
//   console.log('Bubble solution #', i, 'score:', scores[i]);
//   i += 1;
// }

var highScore = printAndGetHightScore(scores);
console.log('Highest bubble score: ' + highScore);

var bestSolutions = getBestResults(highScore, scores);
console.log('Solutions with the highest score: ' + bestSolutions);
