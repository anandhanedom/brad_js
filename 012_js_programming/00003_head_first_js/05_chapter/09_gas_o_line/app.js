var fiat = {
  make: 'Fiat',
  model: '500',
  year: 1955,
  color: 'tan',
  passengers: 5,
  convertible: false,
  mileage: 12892,

  started: false,
  fuel: 0,

  //Start method
  start: function () {
    if (this.fuel == 0) {
      alert('The car is on empty, fill up before starting!');
    } else {
      this.started = true;
      alert('Car has started!');
    }
  },

  //Stop method
  stop: function () {
    this.started = false;
  },

  //Fuel status
  checkFuel: function () {
    return this.fuel;
  },

  //Drive method
  drive: function () {
    if (this.started) {
      if (this.checkFuel() > 0) {
        alert(this.make + ' ' + this.model + ' goes zoom zoom!');
        this.fuel = this.fuel - 1;
      } else {
        alert('Uh oh, out of fuel.');
        this.stop();
      }
    } else {
      alert('You need to start the engine first!');
    }
  },

  addFuel: function (amount) {
    alert('Fuel added!');
    this.fuel = this.fuel + amount;
  },
};

//Method calls
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
