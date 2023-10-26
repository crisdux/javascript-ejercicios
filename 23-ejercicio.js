import { characters } from "./data/characters.js"

//obtener todos los nombres
const getAllNames = (arr) => {
    return arr.map(({name}) => name)
}

console.log(getAllNames(characters)) // [ 'Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker' ]