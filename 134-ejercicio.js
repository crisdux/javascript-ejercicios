// Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:

const numAsteriscos = (arr) => {
    return arr.filter((item) => item === "*" ).length
}

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0