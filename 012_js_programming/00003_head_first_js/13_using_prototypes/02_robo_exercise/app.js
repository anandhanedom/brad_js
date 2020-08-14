function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = 'Hitachi';

Robot.prototype.speak = function () {
  console.log('Hi there!');
};

Robot.prototype.makeCoffee = function () {
  console.log("Here's your coffee....");
};

Robot.prototype.blinkLights = function () {
  console.log('Lights are blinking now....');
};

//Our robots
var robby = new Robot('Robby', 1947, 'Adam');
var rosie = new Robot('Rosie', 2020, 'Eve');

robby.onOffSwitch = function () {
  console.log('Robby can on/off switch');
};

robby.makeCoffee = function () {
  console.log('Robby has made coffee for you.');
};

rosie.cleanHouse = function () {
  console.log('Rosie can clean the house for you.');
};

console.log(
  `${robby.name} was made by ${robby.maker} in ${robby.year} and is owned by ${robby.owner}`
);

robby.makeCoffee();
// rosie.makeCoffee();

robby.blinkLights();
// rosie.blinkLights();

console.log(
  `${rosie.name} was made by ${rosie.maker} in ${rosie.year} and is owned by ${rosie.owner}`
);

rosie.cleanHouse();
// rosie.cleanHouse();

//New exercise
function SpaceRobot(name, year, owner, homePlanet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function () {
  alert(this.name + ' says Sir, If I may venture an opinion...');
};

SpaceRobot.prototype.pilot = function () {
  alert(this.name + ' says Thrusters? Are they important?');
};

var c3po = new SpaceRobot('C3PO', 1977, 'Luke Skywalker', 'Tatooine');

console.log('#######################################');
c3po.speak();
c3po.pilot();

console.log(c3po.name + ' was made by ' + c3po.maker);

var simon = new SpaceRobot('Simon', 2009, 'Carla Diana', 'Earth');
simon.makeCoffee();
simon.blinkLights();
simon.speak();
