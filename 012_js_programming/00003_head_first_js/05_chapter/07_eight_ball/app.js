var eightBall = {
  index: 0,
  advice: ['yes', 'no', 'maybe', 'not a chance'],

  //Shake method
  shake: function () {
    this.index = this.index + 1;
    if (this.index >= this.advice.length) {
      this.index = 0; //reset index
    }
  },

  //Look method
  look: function () {
    return this.advice[this.index];
  },
};

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());
