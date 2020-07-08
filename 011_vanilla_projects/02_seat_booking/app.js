const container = document.querySelector('.container');
const movie = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const price = document.getElementById('total');
let total = document.getElementById('count');

let ticketPrice = +movie.value;

populateUI();

//Update price,total,selected seats
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  //Add to local storage
  const selectedSeatsIndices = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsIndices));

  //Print values
  total.innerText = selectedSeatsCount;
  price.innerText = ticketPrice * selectedSeatsCount;
}

//Populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    [...seats].forEach((seat, i) => {
      if (selectedSeats.indexOf(i) > -1) {
        seat.className = 'seat selected';
      }
    });
  }
}

//Set movie data
function setMovieData(movieIndex) {
  localStorage.setItem('movieIndex', movieIndex);
}

//Movie select event
movie.addEventListener('change', (e) => {
  ticketPrice = +movie.value;
  setMovieData(e.target.selectedIndex);
  updateSelectedCount();
});

//Seat select event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

//Set select index from local storage
const movieIndex = localStorage.getItem('movieIndex');
movie.selectedIndex = movieIndex;

//Selected count update on reload
updateSelectedCount();
