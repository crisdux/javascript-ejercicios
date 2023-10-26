import { characters } from "./data/characters.js"

// regresar un arreglo solo con los primeros nombres de los characters
const getAllFirstNames = (arr) => {
    return arr.map(({name}) => {
        return name.split(' ')[0]
    })
}
console.log(getAllFirstNames(characters))