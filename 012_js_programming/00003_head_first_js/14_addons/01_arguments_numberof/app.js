function printArgs() {
  for (var i = 0; i < arguments.length; i++) {
    //notice the arguments
    console.log(arguments[i]);
  }
}

printArgs('hey', 2, '+', 1, 'is', 3);

function emotion(kind) {
  if (kind === 'sad') {
    console.log('Player sits. He is sad.');
  } else if (kind === 'anger') {
    console.log("Player says: '" + arguments[1] + "'");
  }
}

emotion('sad');
emotion('anger', 'What the hell!');
