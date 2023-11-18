/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

const getFactorial = (x) => {
    let res = 1;
    for(let i = 1; i<=x; i++){
        res *=i
    }
    return res
}
console.log(getFactorial(4)) // 4 * 3 * 2 * 1
console.log(getFactorial(5)) // 5 * 4 * 3 * 2 * 1