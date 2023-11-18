// Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round)

const round = (x) => {
    return {
        floor: Math.floor(x),
        ceil: Math.ceil(x),
        round: Math.round(x)
    }
}

console.log(round(13.3)) //  returns { floor: 13, ceil: 14, round: 13 }