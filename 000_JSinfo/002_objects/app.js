const obj = {
  name: 'Vishal',
  sayHi: () => {
    console.log(this);
  },
};

obj.sayHi();
