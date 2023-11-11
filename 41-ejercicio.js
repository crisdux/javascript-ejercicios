import { characters } from "./data/characters.js"
// obtener el numero total de caracteres del name de los personajes

const getCantidadCaracteresNombre = (arr) => {
    return arr.map(({name}) => {
        return name.length
    }).reduce((item, acc) => item + acc, 0)
}

console.log(getCantidadCaracteresNombre(characters))

