var chevy = {
  make: 'Chevy',
  model: 'Bel Air',
};

var taxi = {
  make: 'Webville Motors',
  model: 'Taxi',
};

var fiat1 = {
  make: 'Fiat',
  model: '500',
};

var fiat2 = {
  make: 'Fiat',
  model: '500',
};

var lot = [chevy, taxi, fiat1, fiat2];

function findCarInLot(car) {
  for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) return i;
  }
  return -1;
}

console.log(findCarInLot(fiat2));
console.log(findCarInLot(taxi));
console.log(findCarInLot(chevy));
console.log(findCarInLot(fiat1));

// console.log(fiat1 == fiat2);
// fiatX = fiat1;
// console.log(fiatX == fiat1);
