import { characters } from "./data/characters.js"

//recuperar todos los hombres

const getAllMale = (arr) =>{
    return arr.filter(({gender}) => gender === "male")
}

console.log(getAllMale(characters))