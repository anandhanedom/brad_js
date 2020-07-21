const balanceEl = document.getElementById('balance'),
  money_plus = document.getElementById('money-plus'),
  money_minus = document.getElementById('money-minus'),
  list = document.getElementById('list'),
  form = document.getElementById('form'),
  text = document.getElementById('text'),
  amount = document.getElementById('amount');

// console.log(balance, money_minus, money_plus, list, form, text, amount);

// let transaction_data = [
//   {
//     id: 1,
//     text: 'Rent',
//     amount: -1500,
//   },
//   {
//     id: 2,
//     text: 'Salary',
//     amount: 25000,
//   },
//   {
//     id: 3,
//     text: 'Petrol',
//     amount: -4000,
//   },
//   {
//     id: 4,
//     text: 'Food',
//     amount: -7000,
//   },
//   {
//     id: 5,
//     text: 'Movie',
//     amount: -300,
//   },
//   {
//     id: 6,
//     text: 'Pickpocket',
//     amount: -200,
//   },
// ];

const local_storage_items = JSON.parse(localStorage.getItem('transaction'));

let transaction_data = local_storage_items !== null ? local_storage_items : [];

// console.log(transaction_data);

//Display list items or history
function displayHistory() {
  //Clear list items
  list.innerHTML = '';

  transaction_data.forEach((transaction) => {
    //List item
    const li = document.createElement('li');

    if (transaction.amount > 0) {
      li.classList.add('plus');

      li.innerHTML = `${transaction.text} <span>$${transaction.amount}</span><button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>`;
    } else {
      li.classList.add('minus');

      li.innerHTML = `${transaction.text}  <span>-$${Math.abs(
        transaction.amount
      )}</span><button class="delete-btn" onClick="removeTransaction(${
        transaction.id
      })">x</button>`;
    }
    list.appendChild(li);
  });
}

//Update income,expense,balance
function updateValues() {
  //Find amounts
  const amounts = transaction_data.map((transaction) => transaction.amount);

  //calculate balance
  const balance = amounts
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(2);

  //Calculate income
  const income = amounts
    .filter((amount) => {
      return amount > 0;
    })
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(2);

  //Calculate expense
  const expense = amounts
    .filter((amount) => {
      return amount < 0;
    })
    .reduce((total, amount) => (total += amount), 0)
    .toFixed(2);

  //Output to DOM
  balanceEl.innerText = `$${balance}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

//Update local storage
function updateLocalStorage() {
  localStorage.setItem('transaction', JSON.stringify(transaction_data));
}

//Random ID generation
function generateID() {
  return Math.floor(Math.random() * 10000000);
}

//Add transaction
function addTransaction(transaction) {
  transaction_data.push(transaction);

  displayHistory();
  updateValues();
  updateLocalStorage();

  //Reset input fields
  text.value = '';
  amount.value = '';
}

//Remove transaction
function removeTransaction(transactionID) {
  transaction_data = transaction_data.filter((transaction) => {
    return transaction.id !== transactionID;
  });

  displayHistory();
  updateValues();
  updateLocalStorage();
}

//Form event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (text.value === '' && amount.value === '') {
    alert('Missing field value(s)');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };

    addTransaction(transaction);
  }
});

displayHistory();
updateValues();
