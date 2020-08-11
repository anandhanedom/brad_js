var blur = true;

function reblur(e) {
  var img = e.target;
  var name = img.id;

  name = name + 'blur.jpg';
  img.src = name;
}

function showAnswer(e) {
  var image = e.target;

  var name = image.id;
  name = name + '.jpg';

  image.src = name;

  // //Reblur after 2 seconds
  // setTimeout(reblur, 2000, image);
}

function init() {
  //Get all img tags
  var images = document.querySelectorAll('img');

  //Loop and assign on clicks
  for (var i = 0; i < images.length; i++) {
    // images[i].onmouseover = showAnswer;
    images[i].onmouseover = showAnswer;
    images[i].onmouseout = reblur;
  }
}

window.onload = init;
