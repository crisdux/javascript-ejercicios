import { characters } from "./data/characters.js"

//contar cuantas personas tienen los ojos azules
const contarOjosAzules = (arr) => {
    return arr.map(({eye_color}) => eye_color).filter(color => color === 'blue').length
}

console.log(contarOjosAzules(characters))