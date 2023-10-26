// Usa la palabra "arr" para multiplicar todos los argumentos y devolver el producto.
// Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
// [PISTA]: "arr" es un arreglo.
// Tu código:
function multiplicarArgumentos(...arr) {
    if(!Array.isArray(arr)) {
        return "El parámetro debe ser un arreglo y no debe estar vacio";
    }
    if(arr.some((item) => typeof item !== "number")) {
        return "Los elementos deben ser números";
    }
    return arr.length === 0 ? 0 : arr.reduce((acc, curr) => acc * curr);
}

console.log(multiplicarArgumentos(1,2,3,4,5))
console.log(multiplicarArgumentos(1))
console.log(multiplicarArgumentos())
console.log(multiplicarArgumentos(1, 2, 3, "4"))
