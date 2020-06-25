// // document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello world';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName()
// let lis = document.getElementsByTagName('li');

// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //Convert HTML collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach((li, i) => console.log(li.className));

// console.log(lis);

// document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach((item, index) => {
  item.textContent = `${index}:Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((li, index) => {
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'red';
}

console.log(items);
