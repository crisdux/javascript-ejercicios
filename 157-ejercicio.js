// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado.

const min = (numeros) => {
    let arrNumeros = numeros.split(" ")
    return arrNumeros.map((numero) =>Number(numero)).sort((a,b) => a-b).at(0)
}

console.log(min("5 7 99 34 54 2 12")) // 2 