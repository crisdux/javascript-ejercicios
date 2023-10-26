// Si todos los elementos del arreglo son iguales, retornar true.
// Caso contrario retornar false. Usar array methods de javascript
// Tu código:
function todosIguales(array) {
    if(!Array.isArray(array)) return "Debe ser un arreglo";
    if(array.length === 0) return false
    return array.every(element => element === array[0])
}


console.log(todosIguales([1, 1, 1, 1])) // true
console.log(todosIguales([1, 1, 1, 2])) // false
console.log(todosIguales([1, 2])) // false
console.log(todosIguales([1])) // true
console.log(todosIguales([])) // true
console.log(todosIguales(["hola", "hola", "hola", "hola"])) // true
