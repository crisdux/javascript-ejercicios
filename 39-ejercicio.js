import { characters } from "./data/characters.js"

//total de masa de todos los personajes

const getTotalMasa = (arr) => {
    return arr.map(({mass}) => Number(mass)).reduce((acc, mass) => acc +mass)
}

console.log(getTotalMasa(characters))