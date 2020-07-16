const user = { email: 'johndoe@gmail.com' };

try {
  //Produce reference error
  // myFunction();
  //Produce  a type error
  // null.myFunction();
  //Produce syntax error
  // eval('"hello world"');
  //Produce URI error
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name!';
    throw new SyntaxError('User has no name!');
  }
} catch (err) {
  console.log(`User error`, err.message);
  // console.log(err); //Full error
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof TypeError);
} finally {
  console.log('Runs.. no problem');
}

console.log('Program continues....');
