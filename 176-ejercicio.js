/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 *
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro
 * del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(-4, 10, 2 ) // returns true
 */

const inRange = (min, max, x) => {
  const numeros = [];
  for (let i = min; i <= max; i++) {
    numeros.push(i);
  }
  return numeros.includes(x);
};

console.log(inRange(-4, 10, 2)); // true
console.log(inRange(-4, 10, 15)); // true
