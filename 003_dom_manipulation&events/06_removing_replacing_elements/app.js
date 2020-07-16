// REPLACE element

//CREATE element
const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title';

//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//get the old/prev heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);
// console.log(newHeading);

//Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();

list.removeChild(lis[1]);

//Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test-class');

link.classList.remove('test-class');
val = link;

//Attribute
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://www.google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;
console.log(val);
