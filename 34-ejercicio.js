import { characters } from "./data/characters.js"

//verificar si hay al menos un personaje con ojos azules
const isExistePersonajeMasa50 = (arr) =>{
    return arr.some(({mass}) => mass < "50")
}

console.log(isExistePersonajeMasa50(characters));