// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; //wait unitl promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong!'));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  //await res of fetch call
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // //only proceed once its removed
  const data = await res.json();

  //only proceed once the second promise is resolved
  return data;
}
