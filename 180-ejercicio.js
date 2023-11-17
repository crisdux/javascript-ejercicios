/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 *
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

const getRockPaperScissor = () => {
    let random = Math.floor(Math.random() * 3) +1 // 1 2 3
    let obj = {
        1: "piedra",
        2: "papel",
        3: "tijera"
    };
    return obj[random]
}
console.log(getRockPaperScissor())