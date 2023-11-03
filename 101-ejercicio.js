// obtner el factorial de un numero

const factorial = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  console.log(res);
};

console.log(factorial(5));

const factorialReduce = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, numero) => acc * numero, 1);
};

console.log(factorialReduce(5));
