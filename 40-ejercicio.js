import { characters } from "./data/characters.js"

//total de alturas de todos los personajes
const getTotalAltura = (arr) => {
    return arr.map(({height }) => Number(height )).reduce((acc, height ) => acc +height )
}

console.log(getTotalAltura(characters))