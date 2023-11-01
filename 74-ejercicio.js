// Escriba una función que devuelva la cantidad de datos incorrectos en una matriz.

const countBadData = (arr) => {
    return arr.filter(item => item < 0 || typeof item === "string").length
}

console.log(countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 0
console.log(countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B"])); // 1
console.log(countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B", "L-B"])); // 2
console.log(countBadData([1, 2, 3, 4, 5, 6, 7, -8, 9, -10, "L-B", "L-B"])); // 4