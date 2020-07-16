// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);

  //Remove task event
  taskList.addEventListener('click', removeTask);

  //Clear tasks event
  clearBtn.addEventListener('click', clearTasks);

  //Filter tasks events
  filter.addEventListener('keyup', filterTasks);
}

//Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
    //Create text node
    const li = document.createElement('li');
    li.className = 'collection-item';

    //Create text node and append to li
    li.appendChild(document.createTextNode(task));

    //Create link element
    const link = document.createElement('a');

    //Add class
    link.className = 'delete-item secondary-content';

    //Add delete icon
    link.innerHTML = "<i class='fa fa-remove'></i>";

    //Append delete link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  });
}

//Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task!');
  }
  //Create text node
  const li = document.createElement('li');
  li.className = 'collection-item';

  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create link element
  const link = document.createElement('a');

  //Add class
  link.className = 'delete-item secondary-content';

  //Add delete icon
  link.innerHTML = "<i class='fa fa-remove'></i>";

  //Append delete link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //Clear input text field
  taskInput.value = '';

  e.preventDefault();
}

//Store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      //Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Remove tasks from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear tasks
function clearTasks() {
  while (taskList.firstChild) {
    // taskList.firstChild.remove();
    taskList.removeChild(taskList.firstChild);

    //Clear local storage
    clearTasksFromLocalStorage();
  }
}

//Clear local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach((task) => {
    const taskName = task.textContent.toLowerCase();
    if (taskName.indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
