let re, res;
const str = 'Hello there';
re = /hello/;
re = /hello/g; //All instances, global
re = /hello/i; //i= case insensitive

// console.log(re);
// console.log(re.source);

//exec()  -Return result in an array or null
res = re.exec('hello world');

// console.log(res);
// console.log(res[0]);
// console.log(res.index);
// console.log(res.input);

//test()  -Return true or false
res = re.test('Hello');

//match() -Return result in an array or null
res = str.match(re);

//search() -Return index of first match if not -1
res = str.search(re);

//replace() -Return new strignwith some or all matches of pattern
res = str.replace(re, 'Hi');

console.log(res);
