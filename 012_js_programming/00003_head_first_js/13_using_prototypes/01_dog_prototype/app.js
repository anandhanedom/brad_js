function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

//declaring a protoype species
Dog.prototype.species = 'Canine';

//A prototype method
Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log(`${this.name} says Woof!`);
  } else {
    console.log(`${this.name} says Yip!`);
  }
};

//Again
Dog.prototype.run = function () {
  console.log('Run!');
};

//and again
Dog.prototype.wag = function () {
  console.log('Wag!');
};

var fido = new Dog('Fido', 'Mixed', 38);
var fluffy = new Dog('Fluffy', 'Poodle', 30);
var spot = new Dog('Spot', 'Chihuahua', 10);

spot.bark = function () {
  console.log(`${this.name} says WOOF!`);
};

//fido's turn
fido.bark();
fido.run();
fido.wag();

//fluffy's turn
fluffy.bark();
fluffy.run();
fluffy.wag();

//spot's turn
spot.bark();
spot.run();
spot.wag();

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(`${this.name} is already sitting`);
  } else {
    this.sitting = true;
    console.log(`${this.name} is sitting now`);
  }
};

var barnaby = new Dog('Barnaby', 'Basset Hound', 55);

barnaby.sit();
fido.sit();
console.log(spot.hasOwnProperty('sitting')); //testing
spot.sit();
console.log(spot.hasOwnProperty('sitting')); //testing
spot.sit();

//New exercises

function ShowDog(name, breed, weight, handler) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}

ShowDog.prototype = new Dog(); //prototypal inheritance

ShowDog.prototype.league = 'Webville';

//Show dog specific methods
ShowDog.prototype.stack = function () {
  console.log('Stack');
};

ShowDog.prototype.bait = function () {
  console.log('Bait');
};

ShowDog.prototype.gait = function (kind) {
  console.log(`${kind}ing`);
};

ShowDog.prototype.groom = function () {
  console.log('Groom');
};

var scooby = new ShowDog('Scooby', 'Scottish Terrier', 15, 'Cookie');

console.log('#######################################');

//Scooby's methods
scooby.stack();
scooby.bark();
console.log(scooby.league);
console.log(scooby.species);
scooby.run();
