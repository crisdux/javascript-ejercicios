// dado un arreglo de enteros del 1 al 10, hacer:
// * solo los numeros pares
// *los numeros divisibles entre 2 o 5
// * numeros divisibles entre 3 eleverlos al cuadrado
// *generar la suma de los numeros divisibles a 5 y elevarlos al cuadrado

const soloPares = (arr) => {
    return arr.filter((item) => item % 2 === 0)
}

console.log(soloPares([1,2,3,4,5,6,7,8,9,10]))

const divisiblesEntre2o5 = (arr) => {
    return arr.filter((item) => item % 2 === 0 || item % 5 === 0)
}

console.log(divisiblesEntre2o5([1,2,3,4,5,6,7,8,9,10]))

const elevarAlCuadradoDivisible3  = (arr) => {
    return arr.filter((item) => item % 3 === 0).map((item) => item ** 2)
}

console.log(elevarAlCuadradoDivisible3([1,2,3,4,5,6,7,8,9,10]))

const sumaCuadradaDivisiblesEntre5 = (arr) => {
    return arr.filter((item) => item % 5 === 0).reduce((acc, item) => acc + item ** 2, 0)
}

console.log(sumaCuadradaDivisiblesEntre5([1,2,3,4,5,6,7,8,9,10]))