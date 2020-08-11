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
    { locations: [0, 0, 0], hits: ['', '', ''] },
    { locations: [0, 0, 0], hits: ['', '', ''] },
    { locations: [0, 0, 0], hits: ['', '', ''] },
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

  generateShipLocations: function () {
    var locations;

    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));

      //Inject into the ship's location
      this.ships[i].locations = locations;
    }
  },

  generateShip: function () {
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    if (direction == 1) {
      // Generate a starting location for a horizontal ship
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * this.boardSize - this.shipLength);
    } else {
      // Generate a starting location for a vertical ship
      row = Math.floor(Math.random() * this.boardSize - this.shipLength);
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction == 1) {
        //for horizontal ship
        newShipLocations.push(row + '' + (col + i));
      } else {
        //for vertical ship
        newShipLocations.push(row + i + '' + col);
      }
    }

    return newShipLocations;
  },

  collision: function (locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) != -1) {
          return true;
        }
      }
    }
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
      col < 0 ||
      col >= model.boardSize
    ) {
      alert("Ooops, that's off the board!");
    } else {
      return row + col;
    }
  }
  return null;
}

//Controller
var controller = {
  guesses: 0,

  //Process method
  processGuess: function (guess) {
    //Validate and return
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      model.fire(location);
      if (model.shipsSunk == model.numShips) {
        view.displayMessage(
          `You sank all my ships in ${this.guesses} guesses!`
        );
      }
    }
  },
};

function init() {
  //Fire button and its event
  var fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;

  //Guess input field and its event
  var guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

//Fire button call back
function handleFireButton() {
  var guessInput = document.getElementById('guessInput');
  var guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = '';
}

//Enter call back
function handleKeyPress(e) {
  var fireButton = document.getElementById('fireButton');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

window.onload = init;

// controller.processGuess('B0');
// controller.processGuess('C0');
// controller.processGuess('D0');
// controller.processGuess('E0');
// controller.processGuess('D2');
// controller.processGuess('D3');
// controller.processGuess('D4');
// controller.processGuess('D5');
// controller.processGuess('G3');
// controller.processGuess('G4');
// controller.processGuess('G5');

// console.log(parseGuess('A0'));
// console.log(parseGuess('B6'));
// console.log(parseGuess('G3'));
// console.log(parseGuess('H0'));
// console.log(parseGuess('A7'));

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
