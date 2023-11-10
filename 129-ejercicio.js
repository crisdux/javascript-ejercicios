// regresar solo los index de las posiciones pares de un arreglo
const posicionesPares = (arr) => {
    return arr.map((item, i) => item % 2 === 0 ? i : []).flat()
}

console.log(posicionesPares([5,9,2,10,7])) // [2,3]
console.log(posicionesPares([])) // []