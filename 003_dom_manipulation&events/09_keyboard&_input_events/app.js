const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
//clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

//keydown
// taskInput.addEventListener('keydown', runEvent);

//keyup
// taskInput.addEventListener('keyup', runEvent);

//keypress
// taskInput.addEventListener('keypress', runEvent);

//focus
// taskInput.addEventListener('focus', runEvent);

//blur
// taskInput.addEventListener('blur', runEvent);

//keydown
// taskInput.addEventListener('keydown', runEvent);

//cut
// taskInput.addEventListener('cut', runEvent);

//paste
// taskInput.addEventListener('paste', runEvent);

//input(master)
// taskInput.addEventListener('input', runEvent);

//change(select field)
select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`Event Type : ${e.type}`);
  console.log(e.target.value);

  // heading.textContent = e.target.value;

  // console.log(taskInput.value);
  // e.preventDefault();
}
