var fiat = {
  make: 'Fiat',
  model: '500',
  year: 1957,
  color: 'Medium Blue',
  passengers: 2,
  covertible: false,
  mileage: 8800,
  started: false,

  //Start the car
  start: function () {
    this.started = true;
  },

  //Stop the car
  stop: function () {
    this.started = false;
  },

  //Drive the car
  drive: function () {
    if (this.started) {
      alert('Zoom zoom!');
    } else {
      alert('You need to start the engine first!');
    }
  },
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
