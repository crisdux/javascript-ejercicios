import { characters } from "./data/characters.js"

//obtener los personas cuya altura sea menor a 200

const getHeightLessThan200 = (arr) => {
    return arr.filter(character => character.height < 200)
}

console.log(getHeightLessThan200(characters))