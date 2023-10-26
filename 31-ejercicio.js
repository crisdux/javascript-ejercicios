import { characters } from "./data/characters.js"

//verificar si hay al menos un personaje con el sexo masculino

const isMaleCharacter = (arr) =>{
    return arr.some((character) => character.gender === "male")
}

console.log(isMaleCharacter(characters));