// El argumento "palabras" es un arreglo de strings.
// Retornar un string donde todas las palabras estén concatenadas
// con un espacio entre cada palabra.
// Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
// Tu código:
function dePalabrasAFrase(palabras) {
    if(!Array.isArray(palabras)) {
       return('El argumento debe ser un arreglo');
    }
    if(palabras.some((item) => typeof item !== "string")){
      return('El arreglo solo debe ser de cadenas');
    }
    return palabras.join(" ")
}


console.log(dePalabrasAFrase(['Hello', 'world!']))
console.log(dePalabrasAFrase(["Hola", "mi", "nombre", "es", "Cristian"]))
console.log(dePalabrasAFrase([1,2,3]))
console.log(dePalabrasAFrase({}))
console.log(dePalabrasAFrase(""))
console.log(dePalabrasAFrase(false))