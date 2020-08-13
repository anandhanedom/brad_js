// function makeTimer(doneMessage, n) {
//   setTimeout(function () {
//     alert(doneMessage);
//   }, n);
// }

// makeTimer("Cookies are done!", 1000);

// function handler(doneMessage) {
//   alert(doneMessage);
// }

// function makeTimer(doneMessage, n) {
//   setTimeout(handler(doneMessage), n);
// }

// makeTimer("Cookies are done!", 1000);

function makeTimer(doneMessage, n) {
  setTimeout(function () {
    alert(doneMessage);
  }, n);
}
makeTimer("Cookies are done!", 1000);
