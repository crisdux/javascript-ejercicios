// La función recibe un arreglo con enteros entre 0 y 200.
// Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
// Tu código:
function mayorACien(array) {
    if(!Array.isArray(array)) return "No es un arreglo";
    if(array.some((item) => item < 0 || item > 200)) return "No es un arreglo con valores entre 0 y 200";
    return array.filter(e => e > 100 && e < 200)
}

console.log(mayorACien([150,196,147,25,14,159]))
console.log(mayorACien([1,2,6,4]))
console.log(mayorACien([-5,522,55]))
