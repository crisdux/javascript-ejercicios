// Verifica si el elemento existe dentro del arreglo recibido.
// Retornar true si está, o false si no está.
// Tu código:
function arrayContiene(array, elemento) {
    if(!Array.isArray(array)){
        return "El primer argumento debe ser un arreglo"
    }
    return array.includes(elemento);
}

console.log(arrayContiene([1, 2, 3], 1)); // true
console.log(arrayContiene([1, 2, 3], 4)); // false*/
console.log(arrayContiene(3, 4));
console.log(arrayContiene(["Pedro", "Juan", "Maria"], "Juan")); // true
