// Este programa toma un alfabeto inglés e informa al usuario si el alfabeto dado es una vocal o una constante.

const veritifcaLetra = (letra) => {
    const vocales = ["a", "e", "i", "o", "u"];
    const vocalesMayusculas = ["A", "E", "I", "O", "U"];
    const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    const consonantesMayusculas = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
    if([...vocales, ...vocalesMayusculas].includes(letra)){
        return "Vocal";
    }else if([...consonantes, ...consonantesMayusculas].includes(letra)){
        return "Consonante";
    }else {
        return "No es una letra";
    }
}
console.log(veritifcaLetra("a")) // Vocal
console.log(veritifcaLetra("b")) // Consonante
console.log(veritifcaLetra("e")) // Vocal
console.log(veritifcaLetra("z")) // Consonante
console.log(veritifcaLetra("9")) // no es una letra
console.log(veritifcaLetra("/")) // no es una letra
console.log(veritifcaLetra({})) // no es una letra