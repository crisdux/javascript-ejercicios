/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 *
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers) {
  return Math.max(...numbers);
}

console.log(getBiggestNumber([3, 8, 2, 1, 10])); //10
