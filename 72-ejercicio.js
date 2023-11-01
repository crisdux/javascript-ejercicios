// Crea una función que devuelva el enésimo número de Fibonacci.

const NthNumberFibonacci = (n) => {
    if(n <=0) return 0;
    if(n <=1) return 1;
    return NthNumberFibonacci(n-1) + NthNumberFibonacci(n-2); // recursividad, se llama a si misma para obtener el siguiente número de Fibonacci.
}

console.log(NthNumberFibonacci(10))// 55
console.log(NthNumberFibonacci(6)) // 8
console.log(NthNumberFibonacci(0)) // 0
console.log(NthNumberFibonacci(1)) // 1
console.log(NthNumberFibonacci(2)) // 1
console.log(NthNumberFibonacci(3)) // 2