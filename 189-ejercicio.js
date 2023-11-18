/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 *
 * @example
 *  countLetter("a", "javascript") // returns 2
 */

const countLetter = (letter, text) => {
  let res = [];
  [...text].forEach((item) => {
    if (item.includes(letter)) {
      res.push(letter);
    }
  });
  return res.length;
};

console.log(countLetter("a", "javascript"));
