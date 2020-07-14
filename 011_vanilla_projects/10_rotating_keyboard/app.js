const btns = document.querySelectorAll('.btn'); //buttons
const rows = document.querySelectorAll('.row'); //rows

let i = 0,
  row = 0;

//Timer
let timer = setInterval(onTick, 3000);

//toggle function
function toggleFunction(i) {
  btns[i].classList.toggle('btn-selected');
  setTimeout(() => {
    btns[i].classList.toggle('btn-selected');
  }, 1000);
}

//Timer function
function onTick() {
  if (row == 0) {
    rows[0].classList.add('row-selected');
    if (i < 12) {
      toggleFunction(i);
      i++;
    } else {
      i = 0;
      toggleFunction(i);
    }
  } else if (row == 1) {
    rows[1].classList.add('row-selected');
    if (i < 24) {
      toggleFunction(i);
      i = i + 1;
    } else {
      i = 12;
      toggleFunction(i);
    }
  } else if (row == 2) {
    rows[2].classList.add('row-selected');
    if (i < 36) {
      toggleFunction(i);
      i = i + 1;
    } else {
      i = 24;
      toggleFunction(i);
    }
  } else if (row == 3) {
    rows[3].classList.add('row-selected');
    if (i < 48) {
      toggleFunction(i);
      i = i + 1;
    } else {
      i = 36;
      toggleFunction(i);
    }
  } else if (row == 4) {
    rows[4].classList.add('row-selected');
    if (i < 60) {
      toggleFunction(i);
      i = i + 1;
    } else {
      i = 48;
      toggleFunction(i);
    }
  } else if (row == 5) {
    rows[5].classList.add('row-selected');
    if (i < 72) {
      toggleFunction(i);
      i = i + 1;
    } else {
      i = 60;
      toggleFunction(i);
    }
  }
}

//Click event listener
window.addEventListener('click', () => {
  const btn = document.querySelector('.btn-selected');
  if (!btn.classList.contains('control')) {
    const letter = btn.innerText;
    console.log(letter);
  } else {
    if (btn.classList.contains('down')) {
      rows[row].classList.remove('row-selected');
      row += 1;
    } else {
      rows[row].classList.remove('row-selected');
      row -= 1;
    }
  }
});
