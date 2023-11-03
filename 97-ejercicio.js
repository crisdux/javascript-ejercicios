const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const sumaPrimo = (n) => {
  let suma = 0;
  if (n < 2) return 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      suma += i;
    }
  }
  return suma;
};

console.log(sumaPrimo(100));
