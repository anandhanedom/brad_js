const fido = { name: 'Fido', weight: 40, breed: 'Mixed', loves: 'Walks' };

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount;
}

loseWeight(fido, 10);

console.log(fido.name + ' now weighs ' + fido.weight);
