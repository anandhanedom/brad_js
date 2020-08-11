function showAnswer() {
  var image = document.getElementById('zero');
  image.src = 'zero.jpg';
}

function init() {
  //Get all img tags
  var images = document.querySelectorAll('img');

  //Loop and assign on clicks
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

window.onload = init;
