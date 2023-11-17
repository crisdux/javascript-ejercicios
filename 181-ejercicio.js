/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

const getRockPaperScissorRandomSequence = (longitud) => {
  const res = [];
  const obj = {
    1: "piedra",
    2: "papel",
    3: "tijera",
  };
  for (let i = 0; i < longitud; i++) {
    let random = Math.floor(Math.random() * 3) + 1;
    res.push(obj[random]);
  }
  return res;
};

console.log(getRockPaperScissorRandomSequence(4));
