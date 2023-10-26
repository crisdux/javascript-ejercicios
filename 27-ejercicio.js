import { characters } from "./data/characters.js"

//obtener los personajes cuya masa es mayor a 100

const getMassTotal = (arr) => {
    return arr.filter(({mass}) => Number(mass) > 100 )
}

console.log(getMassTotal(characters))