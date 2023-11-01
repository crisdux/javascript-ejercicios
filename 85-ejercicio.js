// Cree una función que tome una cadena como entrada y devuelva la versión invertida de la cadena sin utilizar el método inverso() incorporado.

const reverseString = (cadena) => {
    let arrCadena = [...cadena];
    const resulatado = []
    for(let i = arrCadena.length - 1; i>=0; i--){
        resulatado.push(arrCadena[i])
    }
    return resulatado.join("")
}

console.log(reverseString("cris"))