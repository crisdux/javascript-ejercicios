// Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra

const getSpaces = (str) => {
    return [...str].filter((item) => item === " ").length
}

const getDigits = (str) => {
    return [...str].filter((item) => item >= 0 && item <= 9 && item !== " ").length
}

const getLetters = (str) => {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    return [...str].filter((item) => !digits.includes(item) && item !== " ").length
}

const getStringInfo = (str) => {
    return {
        LETTERS: getLetters(str),
        DIGITS: getDigits(str),
        SPACES: getSpaces(str),
    }
}

console.log(getStringInfo("H3ll0 Wor1d")) // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }
console.log(getStringInfo("Hola 159 mun#do, como? es1as")) // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }




