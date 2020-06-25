// event bubbling

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('Card Title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('Card Content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('Card');
// });
// document.querySelector('.col').addEventListener('click', function () {
//   console.log('Col');
// });

// event delegation
// const delItem = document.querySelector('.delete-item');

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if (
  //   event.target.parentElement.className === 'delete-item secondary-content'
  // ) {
  //   console.log('delete-item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete-item');
    e.target.parentElement.parentElement.remove();
  }
}
