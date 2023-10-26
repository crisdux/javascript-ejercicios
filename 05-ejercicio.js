// Agrega el "elemento" al final del arreglo recibido.
// Retorna el arreglo.
function agregarItemAlFinalDelArray(array = [], elemento = "") {
    validarArreglo(array);
    return array.concat(elemento);
}

const validarArreglo = (array) => {
    if(!Array.isArray(array)) {
        return('El argumento debe ser un arreglo');
    }
}

console.log(agregarItemAlFinalDelArray([1,2,3], [4,5]));
console.log(agregarItemAlFinalDelArray([1,2,3], 4));
console.log(agregarItemAlFinalDelArray([1,2,3], "Hola"));
console.log(agregarItemAlFinalDelArray([1,2,3], {}));
console.log(agregarItemAlFinalDelArray([], []));
console.log(agregarItemAlFinalDelArray([1,2,3], "Hola mundo"));
console.log(agregarItemAlFinalDelArray());
