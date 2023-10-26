(() => {
    // Retornar el primer elemento del arreglo recibido por parámetro.
const devolverPrimerElemento = (array) => {
    if(array.length === 0) return {"message": "El arreglo no puede estar vacio"}
    if(!Array.isArray(array)) return {"message": "El parámetro debe ser un arreglo"}
    return array[0];
}
console.log(devolverPrimerElemento([1,2,3,4,5]));
console.log(devolverPrimerElemento([1]));
console.log(devolverPrimerElemento([]));
console.log(devolverPrimerElemento("Hola mundo"));
console.log(devolverPrimerElemento(5));
console.log(devolverPrimerElemento({}));
})();