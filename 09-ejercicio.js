// El parámetro "arrayOfNums" debe ser un arreglo de números.
// Suma todos los elementos y retorna el resultado.
// Tu código:
function agregarNumeros(arrayOfNums) {
    if(!Array.isArray(arrayOfNums)) return "El parametro debe ser un arreglo"
    if(arrayOfNums.some((item) => typeof item !== "number")) return "Los elementos deben ser numeros"
    return arrayOfNums.reduce((acc, curr) => acc + curr, 0)
}

console.log(agregarNumeros([1,2,3,4,5]));
console.log(agregarNumeros([]));
console.log(agregarNumeros([1,2,3,4,"5"]))
console.log(agregarNumeros(6))
console.log(agregarNumeros({}))
console.log(agregarNumeros(false))