//Retornar la longitud del arreglo recibido por parámetro.
function obtenerLargoDelArray(array) {
    return (!Array.isArray(array) ? "El parámetro no es un arreglo." : array.length);
}
 

console.log(obtenerLargoDelArray([1,2,3,4,5,6,7,8,9,10]));
console.log(obtenerLargoDelArray([]));
console.log(obtenerLargoDelArray({}));
console.log(obtenerLargoDelArray(1));
console.log(obtenerLargoDelArray("Hola"));
