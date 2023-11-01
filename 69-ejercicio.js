//Dado un número N, imprima la suma de todos los números del 1 al N.

const sumaN = (n) => {
    let suma = 0
    for(let i = 1; i <=n; i++){
        suma += i
    }
    return suma
}

console.log(sumaN(10)) // 55
console.log(sumaN(5)) // 15
console.log(sumaN(1)) // 1
console.log(sumaN(0)) // 0  