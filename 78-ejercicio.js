// Dada una matriz de números pares e impares, devuelve una matriz de números pares y convierte números impares en pares.

const paresImpares = (array) => array.map((number) => number % 2 !== 0 ? number + 1 : number)


console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [2, 2, 4, 4, 6, 6, 8, 8, 10, 10]
console.log(paresImpares([1, 3, 5, 7, 9])) // [2, 4, 6, 8, 10]
console.log(paresImpares([2, 4, 6, 8, 10])) // [2, 4, 6, 8, 10]