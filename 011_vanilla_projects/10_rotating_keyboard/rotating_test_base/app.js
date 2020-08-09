const btns = document.querySelectorAll('.btn'); //buttons
const rows = document.querySelectorAll('.row'); //rows
const screen = document.querySelector('.text-field'); //screen
const tap = document.querySelector('.tap');

let i = 0, //button
  j = 0; //row

let string = '';

let timerRow = setInterval(onTickRow, 1000);
let timerBtn;
let revTimerRow;

//Row tick
function onTickRow() {
  if (j < 6) {
    rows[j].classList.toggle('row-selected');
    setTimeout(() => {
      rows[j].classList.toggle('row-selected');
      j++;
    }, 900);
  } else {
    j = 0;
  }
}

function onTickRowRev() {
  if (j > -1) {
    rows[j].classList.toggle('row-selected');
    console.log(i, j);
    setTimeout(() => {
      rows[j].classList.toggle('row-selected');
      j--;
    }, 900);
  } else {
    j = 5;
  }
}

//Button tick
function onTickBtn() {
  if (i < 12 * j) {
    btns[i].classList.toggle('btn-selected');
    setTimeout(() => {
      btns[i].classList.toggle('btn-selected');
      i++;
    }, 900);
  } else {
    i = (j - 1) * 12;
  }
}

//Update string
function updateString(letter) {
  string += letter;
  screen.innerText = string;
}

window.addEventListener('click', () => {
  //Current row and button select
  const currRow = document.querySelector('.row-selected');
  const currBtn = document.querySelector('.btn-selected');
   if (currBtn) {
    if (![0, 11, 12, 23, 24, 35, 36, 47, 48, 59, 60, 71].includes(i)) {
    } else {
      if (!(i % 2 == 0)) {
        clearInterval(timerBtn);
        clearInterval(revTimerRow);
        timerRow = setInterval(onTickRow, 1000);
      } else {
        clearInterval(timerBtn);
        clearInterval(timerRow);
        j--;
        revTimerRow = setInterval(onTickRowRev, 1000);
      }
    }
  }
  //if there is no btn tick
  else {
    timerBtn = setInterval(onTickBtn, 1000);
    clearInterval(timerRow);
    clearInterval(revTimerRow);
    i = j * 12;
  }
});
