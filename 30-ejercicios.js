import { characters } from "./data/characters.js"

//recuperar todas las mujeres
const getAllFemale = (arr) =>{
    return arr.filter(({gender}) => gender === "female")
}

console.log(getAllFemale(characters))