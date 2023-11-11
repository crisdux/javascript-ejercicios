// Crear un programa que permita saber si Sam y Frodo están juntos.El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después.

const contadorFrutas = (frutas) => {
    let arr = Object.entries(Object.groupBy(frutas, (item) => item))
    for([key, value] of arr){
        console.log(key, value.length)
    }
}

console.log(contadorFrutas(["manzana","pera", "fresa", "manzana", "fresa"]))
