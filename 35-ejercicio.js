import { characters } from "./data/characters.js"

// todos los perosnajes tiene ojos azules?

const todoOjosAzules = (arr) => {
    return arr.every(({eye_color}) => eye_color ==="blue")
}

console.log(todoOjosAzules(characters))