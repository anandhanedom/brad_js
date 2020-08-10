var view = {
  //takes a string message and displays it in the message display area
  displayMessage: function (msg) {
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.classList.add('hit');
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.classList.add('miss');
  },
};

//Model
var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  //Our ships
  ships: [
    { locations: ['10', '20', '30'], hits: ['', '', ''] },
    { locations: ['32', '33', '34'], hits: ['', '', ''] },
    { locations: ['63', '64', '65'], hits: ['', '', 'hit'] },
  ],

  //is Sunk? method
  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  },

  //fire method
  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];

      var index = ship.locations.indexOf(guess);
      if (index != -1) {
        //We've a hit
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('Its a HIT!');

        if (this.isSunk(ship)) {
          this.shipsSunk++;
          view.displayMessage('You sank my ship!');
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('Its a miss!');

    return false;
  },
};

//Validate guess
function parseGuess(guess) {
  var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess.length !== 2) {
    alert('Oops, please enter a letter and  a number on the board!');
  } else {
    var firstCharacter = guess.charAt(0);
    var row = alphabets.indexOf(firstCharacter);
    var col = guess.charAt(1);

    //Conditions
    if (isNaN(row) || isNaN(col)) {
      alert("Oops, that isn't on the board.");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("Ooops, that's off the board!");
    }
  }
}

//Controller
var controller = {
  guesses: 0,
  processGuesses: function (guess) {},
};

// model.fire('53');
// model.fire('06');
// model.fire('16');
// model.fire('26');
// model.fire('34');
// model.fire('24');
// model.fire('44');
// model.fire('12');
// model.fire('11');
// model.fire('10');
