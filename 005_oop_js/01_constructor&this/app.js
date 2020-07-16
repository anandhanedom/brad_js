//Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  // console.log(this);
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// console.log(this);
// this.alert(1);

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(brad);
// console.log(john);

// console.log(john.age);

const brad = new Person('Brad', '6-27-1998');
console.log(brad.calculateAge());
