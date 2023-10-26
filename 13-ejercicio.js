// Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
// Tu código:
function cuentoElementos(array) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        if(item > 18) {
            resultado.push(item);
        }
    }
    return resultado.length;
}

// Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
// Tu código:
function cuentoElementos(array) {
    if(!Array.isArray(array)) return "No es un array"
    if(array.some((item) => typeof item !== "number")) return "Debe ser un array de numeros"
    const resultado = [];
  
    for (let i = 0; i <= array.length; i++) {
      if (array[i] > 18) {
        resultado.push(array[i]);
      }
    }
    return resultado.length;
  }
  
  console.log(cuentoElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))
  console.log(cuentoElementos([20,21,22]))
  console.log(cuentoElementos([]))
  console.log(cuentoElementos({}))
  console.log(cuentoElementos(11))
  console.log(cuentoElementos(["Hola"]))