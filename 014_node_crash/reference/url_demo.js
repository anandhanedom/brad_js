const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialised URL
console.log(myUrl.href);
console.log(myUrl.href.toString());

//Host (root domain) - includes port eg. :8000
console.log(myUrl.host);

//Host name
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add param
console.log(myUrl.searchParams.append('abc', '123'));

//Loop through params
console.log(
  myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`))
);
