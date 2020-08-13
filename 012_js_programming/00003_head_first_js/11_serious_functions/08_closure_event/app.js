window.onload = function () {
  var count = 0;
  var message = "You clicked me";

  const div = document.getElementById("message");
  var btn = document.getElementById("clickme");

  btn.addEventListener("click", function () {
    count++;
    div.innerHTML = `${message} ${count} times!`;
  });
};
