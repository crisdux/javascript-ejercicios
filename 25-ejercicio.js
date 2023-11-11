import { characters } from "./data/characters.js"
// regresar un arreglo de objetos con nombre y altura
const getNamesHeights = (arr) => arr.map(({name, height}) => ({ name,height }))

console.log(getNamesHeights(characters))