// Crear una funcion que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices ej:

const intercambio = (arr, i, j) => {
    let val1 = arr[i]; //9
    let val2 = arr[j]; //1
    let valAux = val1;
    val1 = val2; //1
    val2 = valAux //9
    arr[i] = val1;
    arr[j] = val2;
    return arr
}
console.log(intercambio([2, 9, 7, 1, 3], 1, 3)) // [2,1,7,9,3]
console.log(intercambio([20,50,90,70,100], 3,0)) // [70,50,90,20,100]

const intercambio2 = (arr,i,j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

console.log(intercambio2([2, 9, 7, 1, 3], 1, 3)) // [2,1,7,9,3]
console.log(intercambio2([20, 50, 90, 70, 100], 3, 0)) // [70,50,90,20,100]



