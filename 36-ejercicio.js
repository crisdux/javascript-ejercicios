import { characters } from "./data/characters.js"

// todos los perosnajes tienen una masa superior a 40

const todoOjosAzules = (arr) => {
    return arr.every(({mass}) => Number(mass) > 40)
}

console.log(todoOjosAzules(characters))