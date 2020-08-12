var passengers = [
  { name: 'Jane Doloop', paid: true },
  { name: 'Dr. Evel', paid: true },
  { name: 'Sue Property', paid: false },
  { name: 'John Funcall', paid: true },
];

function checkNoFlyList(passenger) {
  return passenger.name === 'Dr. Evel';
}

function checkNotPaid(passenger) {
  return !passenger.paid;
}

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false; //if any fail condition is true - plane wont take off
    }
  }
  return true;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log(
    "The plane can't take off: we have a passenger on the no-fly-list."
  );
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
  var msg = passenger.name;

  if (passenger.paid) {
    msg = msg + ' has paid!';
  } else {
    msg = msg + " hasn't paid!";
  }
  console.log(msg);
}
var hello = processPassengers(passengers, printPassenger);
console.log(hello);
