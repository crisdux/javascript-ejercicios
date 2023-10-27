import { characters } from "./data/characters.js"

// ordenar characters por nombre

const sortedName = (arr) => {
    return arr.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
}

console.log(sortedName(characters))