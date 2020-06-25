let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector(
  'ul.collection li.collection-item:first-child'
);

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;

// 1=element
// 2=attribute(deprecated)
// 3=text node
// 8=comment
// 9=document itself
// 10=doctype

// Get child elements
val = list.children;
val = list.children[0];
val = list.children[1].textContent = 'hello';

//children of children
val = list.children[3].children;
val = list.children[3].children[0];
// list.children[3].children[0].id = 'heythere';

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get prev siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

val = console.log(val);
