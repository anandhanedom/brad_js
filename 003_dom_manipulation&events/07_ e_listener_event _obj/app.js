// document
//   .querySelector('.clear-tasks')
//   .addEventListener('click', function (event) {
//     console.log('Clicked');

//     // event.preventDefault();
//   });
function onClick(e) {
  let val;
  val = e;

  //event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerHTML = 'Hello';

  //Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  //event coordinates relative to the window
  val = e.clientY;
  val = e.clientX;

  //event coordinates relative to itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

document.querySelector('.clear-tasks').addEventListener('click', onClick);
