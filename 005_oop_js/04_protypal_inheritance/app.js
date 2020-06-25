//Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

//customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('Tom', 'Smith', '907561169', 'Standard');
console.log(customer1);

//Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};
console.log(customer1.greeting());
