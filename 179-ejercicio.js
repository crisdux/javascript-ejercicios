/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

const getPercentage = (number, percentage) => {
    return (number * percentage) / 100;
}

console.log(getPercentage(200, 10)) // returns 20
console.log(getPercentage(1, 10)) // returns 0.1