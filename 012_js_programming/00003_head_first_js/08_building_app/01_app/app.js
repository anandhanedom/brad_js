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

  //fire method
  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];

      var index = ship.locations.indexOf(guess);
      if (index != -1) {
        //We've a hit
        ship.hits[index] = 'hit';
        return true;
      }
    }
    return false;
  },
};

//View methods
// view.displayMiss('00');
// view.displayHit('34');
// view.displayMiss('55');
// view.displayHit('12');
// view.displayMiss('25');
// view.displayHit('26');

// view.displayMessage('"Tap tap, is this thing on?');

// //Finish this code to access the second ship's middle location and print its value with console.log
// var ship2 = ships[1];
// var locations = ship2.locations;
// console.log('Location is ' + locations[1]);

// //Finish this code to see if the third ship has a hit in its first location:
// var ship3 = ships[2];
// var hits = ship3.hits;
// if (hits[0] === 'hit') {
//   console.log('Ouch, hit on third ship at location one');
// }

// //Finish this code to hit the first ship at the third location:
// var ship1 = ships[0];
// var hits = ship1.hits;
// hits[2] = 'hit';
