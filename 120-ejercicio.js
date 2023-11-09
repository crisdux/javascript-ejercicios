//funcion que regrese los items repetidos de un array dado

const palabras = ["perro", "gato", "perro", "loro", "elefante", "gato", "loro"];

const getPalabrasRepetidas = (palabras) => {
    return palabras.filter((palabra, index) => palabras.indexOf(palabra) !== index)
}

console.log(getPalabrasRepetidas(palabras))