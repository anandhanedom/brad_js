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

var costs = [
  0.25,
  0.27,
  0.25,
  0.25,
  0.25,
  0.25,
  0.33,
  0.31,
  0.25,
  0.29,
  0.27,
  0.22,
  0.31,
  0.25,
  0.25,
  0.33,
  0.21,
  0.25,
  0.25,
  0.25,
  0.28,
  0.25,
  0.24,
  0.22,
  0.2,
  0.25,
  0.3,
  0.25,
  0.24,
  0.25,
  0.25,
  0.25,
  0.27,
  0.25,
  0.26,
  0.29,
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

function getMostEffectiveSolution(scores, costs, highscore) {
  var cost = 100;
  var index;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highscore) {
      if (costs[i] < cost) {
        index = i;
        cost = costs[i];
      }
    }
  }

  return index;
}

function getMostEffectiveSolutionQuickly(bestSolutions, costs) {
  var cost = 100;
  var index;
  for (var i = 0; i < bestSolutions.length; i++) {
    if (costs[i] < cost) {
      index = i;
      cost = costs[i];
    }
  }

  return index;
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

var mostCostEffective = getMostEffectiveSolution(scores, costs, highScore);
console.log(
  'Bubble Solution #' + mostCostEffective + ' is the most cost effective'
);

var mostCostEffectiveQuickly = getMostEffectiveSolutionQuickly(
  bestSolutions,
  costs
);

console.log(
  'Bubble Solution #' +
    mostCostEffective +
    ' is the most cost effective quickly!'
);
