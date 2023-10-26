// El parámetro "resultadosTest" es un arreglo de números.
// Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
// Tu código:
function numeroMasGrande(resultadosTest) {
    if(!Array.isArray(resultadosTest)) {
        return "El parámetro debe ser un arreglo";
    }
    if(resultadosTest.some((item) => typeof item !== "number")) {
        return "Los elementos deben ser números";
    }
    return resultadosTest.reduce((acc, curr) => acc + curr, 0) / resultadosTest.length;
}

console.log(numeroMasGrande([20, 60, 30])); 
console.log(numeroMasGrande([20, 20, 20])); 
console.log(numeroMasGrande([20, 60, 30, "hola"]));
console.log(numeroMasGrande([20, 60, 30, 40, 50]));
