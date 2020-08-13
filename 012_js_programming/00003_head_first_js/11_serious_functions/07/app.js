function setTimer(doneMessage, n) {
  setTimeout(function () {
    alert(doneMessage);
  }, n);
  doneMessage = "OUCH!";
}

setTimer("Cookies are done!", 1000);
