class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    // console.log(book);
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');

    //row contents(columns)
    row.innerHTML = `<td>${book.title}</td>
                  <td>${book.author}</td> 
                  <td>${book.isbn}</td> 
                  <td><a href="#" class="delete">X<a></td>`;

    //append row to list
    list.appendChild(row);
  }

  showAlert(message, className) {
    //create div
    const div = document.createElement('div');

    //Add class
    div.className = `alert ${className}`;

    //Append message
    div.appendChild(document.createTextNode(message));

    //Get the parent container
    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    //Insert alert
    container.insertBefore(div, form);

    //Timeout after 3 sec
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

//Local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      const ui = new UI();

      //Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event listener for adding book
document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

  //Validate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all the fields', 'error');
  } else {
    //add book method
    ui.addBookToList(book);

    //add to local storage
    Store.addBook(book);
    //show success
    ui.showAlert('Book added!', 'success');

    //clear fields method
    ui.clearFields();
  }

  e.preventDefault();
});

//Event listener for deleting book
document.getElementById('book-list').addEventListener('click', function (e) {
  //Instantiate UI
  const ui = new UI();

  //delete book method call
  ui.deleteBook(e.target);

  //remove book from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  //Show message
  ui.showAlert('Book removed!', 'success');

  e.preventDefault();
});
