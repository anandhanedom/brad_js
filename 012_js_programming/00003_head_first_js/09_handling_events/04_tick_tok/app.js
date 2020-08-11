//Timer callback
// function timerHandler() {
//   alert(
//     'Hey there! Are you doing just sitting there staring at a black screen?'
//   );
// }

// setTimeout(timerHandler, 3000);

var tick = true;

function tickTock() {
  if (tick) {
    console.log('Tick');
    tick = false;
  } else {
    console.log('Tock');
    tick = true;
  }
}

setInterval(tickTock, 1000);
