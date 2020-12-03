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
  // if (req.url === '/') {
  //   // res.writeHead(200, { 'Content-Type': 'text/html' });
  //   // res.end('<h1>Home</h1>');
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.end(content);
  //     }
  //   );
  // } else if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'Alice Hopkins ', age: 50 },
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  //Build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //File extension
  let extname = path.extname(filePath);

  //Initial content type
  let contentType;

  //Check extension & set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;

    case '.css':
      contentType = 'text/css';
      break;

    case '.json':
      contentType = 'text/json';
      break;

    case '.png':
      contentType = 'text/png';
      break;

    case '.jpg':
      contentType = 'text/jpg';
      break;

    default:
      contentType = 'text/html';
      break;
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        //Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end(`Server error : ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
