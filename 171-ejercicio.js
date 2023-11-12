// Crear un programa que permita ingresar una lista de palabras separadas por espacios y que pregunta a cuántos caracteres se desea recortar las palabras.El programa debe devolver una lista con las palabras recortadas en esa cantidad de caracteres.Ejemplo:

// Ingrese palabras: elefante sociedad chocolate avion america
// Ingrese cantidad de caracteres permitidos: 4

// Las palabras recortadas son: elef soci choc avio amer

const recortarPalabras = (palabras, x) => {
    return palabras.split(" ").map((item) => item.slice(0,x))
}

console.log(recortarPalabras("elefante sociedad chocolate avion america", 4))