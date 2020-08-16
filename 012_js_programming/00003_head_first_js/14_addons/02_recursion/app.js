function fibonacci(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

for (var i = 0; i < 10; i++) {
  console.log(`Fibonacci of ${i} is ${fibonacci(i)}`);
}
