// El arreglo recibido por parámetro contiene números.
// Retornar un arreglo con los elementos incrementados en +1.
function incrementarPorUno(array) {
    if(!Array.isArray(array)) return "El argumento pasado debe ser un arreglo"
    if(array.length === 0) return 0
    if (array.some((item) => typeof item !== "number")) {
      return "Solo se aceptan numeros"
    }
    return array.map((item) => item + 1)
  }
  
  
  console.log(incrementarPorUno([1, 2, 3, 4, 5]));
  console.log(incrementarPorUno(["Hola", "mundo"]));
  console.log(incrementarPorUno([1]));
  console.log(incrementarPorUno([]));
  console.log(incrementarPorUno("Hola mundo"));
  