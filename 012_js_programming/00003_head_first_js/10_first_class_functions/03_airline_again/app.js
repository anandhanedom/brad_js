// function adder(n) {
//   var add = function (x) {
//     return n + x;
//   };
//   return add;
// }

// var add2 = adder(2);

// console.log(add2(100));

var passengers = [
  { name: 'Agnes Nielson', paid: true, ticket: 'premium' },
  { name: 'Jane Doloop', paid: true, ticket: 'coach' },
  { name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
  { name: 'Sue Property', paid: false, ticket: 'firstclass' },
  { name: 'John Funcall', paid: true, ticket: 'coach' },
];

function createDrinkOrder(passenger) {
  //Return function
  var orderFunction;
  if (passenger.ticket === 'firstclass') {
    orderFunction = function () {
      alert('Would you like a cocktail or wine?');
    };
  } else if (passenger.ticket === 'premium') {
    orderFunction = function () {
      alert('Would you like cola, or water? Or a glass of wine?');
    };
  } else {
    orderFunction = function () {
      alert('Your choice is cola or water.');
    };
  }
  return orderFunction;
}

function createDinnerOrder(passenger) {
  //Return function
  var orderFunction;
  if (passenger.ticket === 'firstclass') {
    orderFunction = function () {
      alert('Would you like a chicken or pasta?');
    };
  } else if (passenger.ticket === 'premium') {
    orderFunction = function () {
      alert('Would you like  snack box or cheese plate?');
    };
  } else {
    orderFunction = function () {
      alert('Your choice is peanuts or pretzels.');
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrink = createDrinkOrder(passenger);
  getDrink();

  // get dinner order
  getDrink();
  getDrink();

  // show movie
  getDrink();

  // pick up trash
}
function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}
servePassengers(passengers);
