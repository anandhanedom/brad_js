var fido = {
  name: 'Fido',
  weight: 48,
  breed: 'mixed',
  loves: 'walks',
};

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount;
}

loseWeight(fido, 8);

alert(fido.name + ' now weighs ' + fido.weight);
