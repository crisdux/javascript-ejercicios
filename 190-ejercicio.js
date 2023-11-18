/**
 * @name canPlay
 * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. Las cartas
 * tienen uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe como un string
 * con color y número. Por ejemplo: "yellow 3", "red 6". Se puede jugar si la carta en la mano coincide en color o en número
 * con la carta en la mesa
 *
 * @param {string[]} hand - Array de cartas que tiene en la mano
 * @param {string} face - Carta que está en la mesa
 * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
 *
 * @example
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") // returns true
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") // returns true
 *   canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") // returns false
 *   canPlay(["yellow 3", "red 8"], "green 2") // returns false
 */

const canPlay = (hand, face) => {
  const arrExtendido = hand.map((item) => item.split(" ")).flat();
  let [faceColor, faceNumber] = face.split(" ");
  return arrExtendido.includes(faceColor) || arrExtendido.includes(faceNumber);
};
console.log(canPlay(["yellow 3", "yellow 5", "red 8"], "red 2"));
console.log(canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5"));
console.log(canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4"));
console.log(canPlay(["yellow 3", "red 8"], "green 2"));
