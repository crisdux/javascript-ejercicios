import { characters } from "./data/characters.js"

//ordernar por mass
const sortedMass = (arr) => {
    return arr.sort((a, b) => { 
        return a.mass - b.mass
    })
}

console.log(sortedMass(characters))


//ordernar por altura
const sortedAltura = (arr) => {
    return arr.sort((a, b) => { 
        return a.height - b.height
    })
}

console.log(sortedAltura(characters))