// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números.

const suma = (numeros) => {
    let arrNumeros = numeros.split(" ")
    return arrNumeros.map((numero) =>Number(numero)).reduce((acc,item) => acc+item,0)
}

console.log(suma("5 7 10 12 24")) // 58

