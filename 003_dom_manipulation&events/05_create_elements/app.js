// Create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add Id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

//Create text node and append: appendChild()
li.appendChild(document.createTextNode('Hello spidy!'));

// create new link element
const link = document.createElement('a');

//add classes
link.className = 'delete-item secondary-content';

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link into li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
