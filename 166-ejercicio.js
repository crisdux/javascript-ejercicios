// Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales.Si lo son, mostrar un mensaje indicando que se ha ganado.Si se ingresan más de 5 sólo deben evaluarse los primeros 5.

const tragamonedas = (simbolos) => {
    const arrSimbolos = simbolos.slice(0, 5).split("");
    console.log(arrSimbolos)
    const res = arrSimbolos.every((item, i, arr) => {
        return item === arr[0] // no se usa ternario dentro del every
    })
    return res ? "ganaste": "perdiste"
}

console.log(tragamonedas("&&!*$")) // perdiste
console.log(tragamonedas("&&&&&!")) // ganaste
console.log(tragamonedas("*****")) // ganaste
