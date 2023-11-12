//regresar el num mayor de una matriz

const maxMatriz = (matriz) => {
    return Math.max(...matriz.flat())
}

console.log(maxMatriz([
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4]
]))