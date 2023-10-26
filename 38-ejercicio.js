import { characters } from "./data/characters.js"

// todos los perosnajes miden menos de 200

const todoOjosAzules = (arr) => {
    return arr.every(({height}) => Number(height) < 200)
}

console.log(todoOjosAzules(characters))