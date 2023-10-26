// Retornar el último elemento del arreglo recibido por parámetro.
function devolverUltimoElemento(array) {
    if(array.length === 0) {
        return "No hay elementos en el array";
    }
    if(!Array.isArray(array)) {
        return "El parámetro no es un array";
    }
    return array.at(-1);
}

console.log(devolverUltimoElemento([1,2,3,4,5]));
console.log(devolverUltimoElemento(["Hola", "mundo"]));
console.log(devolverUltimoElemento([1]));
console.log(devolverUltimoElemento([]));
console.log(devolverUltimoElemento("Hola mundo"));
console.log(devolverUltimoElemento(5));
console.log(devolverUltimoElemento({}));