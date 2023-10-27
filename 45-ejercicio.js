import { characters } from "./data/characters.js"

//ordenar por sexo
const sortedGender = (arr) => {
    return arr.sort((a, b) => {
        if (a.gender < b.gender) {
            return -1
        }
        if (a.gender > b.gender) {
            return 1
        }
        return 0
    })
}

console.log(sortedGender(characters))