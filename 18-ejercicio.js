// Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
// La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
// Tu código:
function tablaDelSeis() {
    let numero = 6;
    for(let i = 1; i<=60; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

tablaDelSeis();