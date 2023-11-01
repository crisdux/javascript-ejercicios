// Dada una matriz de números, encuentre los números más altos y más bajos de la matriz.

let numbers = [5, 3, 8, 2, 9]; // Min: 2, Max: 9
let numbers2 = [4, 10, 18, 2, 3]; // Min: 2, Max: 18
let numbers3 = [0, 100, 8, 21, 39]; // Min: 0, Max: 100

const minMax= (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min,max
    }
}

console.log(minMax(numbers))
console.log(minMax(numbers2))
console.log(minMax(numbers3))