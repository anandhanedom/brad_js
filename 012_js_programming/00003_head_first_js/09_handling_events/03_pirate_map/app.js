//Init function
function init() {
  var map = document.getElementById('map');
  map.onmousemove = showCoords;
}

//Display coodinates
function showCoords(e) {
  var coords = document.getElementById('coords');

  //Coordinates
  x = e.clientX;
  y = e.clientY;

  //Inject coordinates into the DOM
  coords.innerHTML = 'Map coordinates:' + x + ' ' + y;
}

//On-load event
window.onload = init;
