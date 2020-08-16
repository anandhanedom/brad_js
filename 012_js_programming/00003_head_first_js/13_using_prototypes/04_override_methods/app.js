function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

// console.log(hitler);

Robot.prototype.toString = function () {
  return `${this.name} robot belonging to ${this.owner}`;
};

var hitler = new Robot('Hitler', 1938, 'Nazi');

console.log(hitler.toString());

console.log('This is:' + hitler);

String.prototype.cliche = function () {
  var cliche = ['lock and load', 'touch base', 'open the kimono'];

  for (var i = 0; i < cliche.length; i++) {
    var index = this.indexOf(cliche[i]);

    if (index != -1) {
      return true;
    }
  }

  return false;
};

String.prototype.checkPalindrome = function () {
  var rev = this.split('').reverse().join('');

  if (this == rev) {
    return true;
  } else return false;
};

var sentences = [
  "I'll send my car around to pick you up.",
  "Let's touch base in the morning and see where we are",
  "We don't want to open the kimono, we just want to inform them.",
];

for (var i = 0; i < sentences.length; i++) {
  var phrase = sentences[i];
  if (phrase.cliche()) {
    console.log('CLICHE ALERT: ' + phrase);
  }
}

var name = 'malayalam';
console.log(name.checkPalindrome());
