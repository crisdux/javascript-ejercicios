// El parámetro "arrayOfNums" es un arreglo de números.
// Retornar el número más grande.
// Tu código:
function numeroMasGrande(arrayOfNums) {
    if(!Array.isArray(arrayOfNums) || arrayOfNums.length === 0) {
        return "El parámetro debe ser un arreglo y no debe estar vacio";
    }
    if(arrayOfNums.some((item) => typeof item !== "number")) {
        return "Los elementos deben ser números";
    }
    return Math.max(...arrayOfNums);
}

console.log(numeroMasGrande([20, 60, 30])); 
console.log(numeroMasGrande([20, 20, 20])); 
console.log(numeroMasGrande([20, 60, 30, 40, 50]));
console.log(numeroMasGrande([1,2,3,4,5]));
console.log(numeroMasGrande([]));
console.log(numeroMasGrande([1,2,3,4,"5"]))
console.log(numeroMasGrande(6))
console.log(numeroMasGrande({}))
console.log(numeroMasGrande(false))