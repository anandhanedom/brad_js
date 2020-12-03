// const person1 = require('./person1');
// const person = require('./person');
// const Person = require('./person');

// console.log('Hello from Node JS...');
// console.log(person1);
// console.log(person1.name);

// const adam = new Person('Adam', 100);
// console.log(adam);
// console.log(adam.greeting());

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home</h1>');
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
