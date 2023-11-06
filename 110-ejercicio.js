// En una aplicación de procesamiento de texto, se te pide que realices una serie de manipulaciones en un texto dado. El texto contiene una lista de palabras y números separados por comas. Tu tarea es:

// Eliminar los Espacios en Blanco: Eliminar todos los espacios en blanco que aparecen antes o después de cada palabra.
// Convertir a Minúsculas: Convertir todas las palabras a minúsculas.
// Separar Palabras y Números: Crear dos arreglos separados: uno para las palabras y otro para los números. Las palabras deben ir en un array y los números en otro.
// Ordenar Palabras Alfabéticamente: Ordenar el array de palabras en orden alfabético.
// Sumar los Números: Calcular la suma de todos los números en el array de números.

const texto = "Hola, 123, Mundo, 45, JavaScript, 789, Programación, 6, Ada, 66";
const eliminarEspacio = (cadena) => {
  return cadena.split(",").map((item) => item.trim()).join("")
}

console.log(eliminarEspacio(texto))

const convertirMinisculas = (cadena) => {
  return [...cadena].map((item) => item.toLowerCase()).join("")
} 

console.log(convertirMinisculas(texto))

const separarPalabrasNumeros = (cadena) => {
  const numeros = cadena.split(",")
                .map((item) => item.trim())
                .filter((item) => !isNaN(item)); 
  const palabras = cadena
                .split(",")
                .map((item) => item.trim())
                .filter((item) => isNaN(item)); 

  return {
    numeros, palabras
  }
}


console.log(separarPalabrasNumeros(texto))

const ordenarAlfabeticamente = (cadena) => {
  const palabras = cadena
    .split(",")
    .map((item) => item.trim())
    .filter((item) => isNaN(item)); 
  return palabras.sort()
}

console.log(ordenarAlfabeticamente(texto))

const sumarNumeros = (cadena) => {
  const numeros = cadena.split(",")
    .map((item) => item.trim())
    .filter((item) => !isNaN(item)); 
  return numeros.map((item) => Number(item)).reduce((acc, current) => acc + current,0)
}
console.log(sumarNumeros(texto))
