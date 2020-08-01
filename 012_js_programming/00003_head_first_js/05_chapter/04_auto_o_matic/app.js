function makeCar() {
  var makes = ['Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker'];
  var models = ['Cadillac', '500', 'Bel-Air', 'Taxi', 'Torpedo'];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ['red', 'blue', 'tan', 'yellow', 'white'];
  var convertible = [true, false];

  var random1 = Math.floor(Math.random() * makes.length);
  var random2 = Math.floor(Math.random() * models.length);
  var random3 = Math.floor(Math.random() * years.length);
  var random4 = Math.floor(Math.random() * colors.length);

  var random5 = Math.floor(Math.random() * 5) + 1; //passengers
  var random6 = Math.floor(Math.random() * 2); //convertible

  var car = {
    make: makes[random1],
    model: models[random2],
    year: years[random3],
    color: colors[random4],
    passengers: random5,
    convertible: convertible[random6],
    mileage: 0, //since its a new car
  };
  return car;
}

function displayCar(car) {
  console.log(
    'Your new car is a ' + car.year + ' ' + car.make + ' ' + car.model
  );
}

var myCar = makeCar();

displayCar(myCar);
