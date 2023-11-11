import { characters } from "./data/characters.js"

//obtener todas las alturas
const getAllHeights = (arr) => {
    return arr.map(({height}) => Number(height))
}

console.log(getAllHeights(characters))