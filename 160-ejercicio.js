// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. 

const encontrarIndice = (numeros, valor) => {
    let numerosArray = numeros.split(" ").map((item) => Number(item));
    if(!numerosArray.includes(valor)) return "error"
    return numerosArray.findIndex(item => item === valor)
}

console.log(encontrarIndice("5 7 12 34 54 2 12", 1)) // error
console.log(encontrarIndice("5 7 12 34 54 2 12", 12)) // 2
console.log(encontrarIndice("5 7 12 34 54 2 12", 2)) // 5