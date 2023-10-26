// Agrega el "elemento" al comienzo del arreglo recibido.
// Retorna el arreglo.
function agregarItemAlComienzoDelArray(array = [], elemento="") {
    validarArreglo(array);
    const res = array.unshift(elemento);
    return res;
}

const validarArreglo = (array) => {
    if(!Array.isArray(array)) {
        return('El argumento debe ser un arreglo');
    }
}

console.log(agregarItemAlComienzoDelArray([1,2,3], 4));
console.log(agregarItemAlComienzoDelArray([1,2,3], [4,5]));
console.log(agregarItemAlComienzoDelArray([1,2,3], 4));
console.log(agregarItemAlComienzoDelArray([1,2,3], "Hola"));
console.log(agregarItemAlComienzoDelArray([1,2,3], {}));
console.log(agregarItemAlComienzoDelArray([], []));
console.log(agregarItemAlComienzoDelArray([1,2,3], "Hola mundo"));
console.log(agregarItemAlComienzoDelArray());
