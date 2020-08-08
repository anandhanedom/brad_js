var view = {
  //takes a string message and displays it in the message display area
  displayMessage: function (msg) {
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {},
  displayMiss: function (location) {},
};
