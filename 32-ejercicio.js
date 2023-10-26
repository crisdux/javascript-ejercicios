import { characters } from "./data/characters.js"

//verificar si hay al menos un personaje con ojos azules

const isBlueEyesCharacter = (arr) =>{
    return arr.some((character) => character.eye_color === "blue")
}

console.log(isBlueEyesCharacter(characters));