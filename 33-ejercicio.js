import { characters } from "./data/characters.js"

//verificar si hay al menos un personaje con ojos azules
const isExistePersonajeAltura200 = (arr) =>{
    return arr.some(({height}) => height >= "200")
}

console.log(isExistePersonajeAltura200(characters));