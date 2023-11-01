// Dada una matriz de números enteros, encuentre el índice del número más grande en la matriz.

const indiceMayor = (arr) => {
    const max = Math.max(...arr);
    return arr.indexOf(max);
}

console.log(indiceMayor([12, 3, 1, 54, 65, 4, 9])) // 4
console.log(indiceMayor([12, 3, 1, 54])) // 3