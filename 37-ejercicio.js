import { characters } from "./data/characters.js"

// todos los perosnajes miden menos de 200

const todosSonHombres = (arr) => {
    return arr.every(({gender}) => gender === "male")
}

console.log(todosSonHombres(characters))