const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//Fetch random user and money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

//Double everyone's money
function doubleMoney() {
  data = data.map((person) => {
    return { ...person, money: person.money * 2 };
  });

  updateDOM();
}

//Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

//Filter millionaires
function showMillionaires() {
  data = data.filter((person) => {
    return person.money > 1000000;
  });
  updateDOM();
}

//Calculate the total wealth

function calculateWealth() {
  const wealth = data.reduce((total, user) => (total += user.money), 0);

  const wealthElement = document.createElement('div');
  wealthElement.innerHTML = `<h3>Total Wealth : <strong>${formatMoney(
    wealth
  )}</strong> </h3>`;

  main.appendChild(wealthElement);
}

//Add res obj to data arr
function addData(obj) {
  data.push(obj);
  updateDOM();
}

//Update DOM
function updateDOM(inputData = data) {
  //Clear main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

  //Loop through data
  inputData.forEach((person) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${person.name}</strong> $${formatMoney(
      person.money
    )}`;
    main.appendChild(element);
  });
}

//Format number as money
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
