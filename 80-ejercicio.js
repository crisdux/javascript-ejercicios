// Se le proporciona una matriz con dos cadenas. Escriba una función para verificar que todas las letras presentes en la segunda cadena también estén presentes en la primera cadena, ignorando el caso. La función debería devolver un valor booleano.


const compararCadenas = (array) => {
    const [cadena1, cadena2] = array;
    let cadena1LowerCase = cadena1.toLowerCase();
    let cadena2LowerCase = cadena2.toLowerCase();
    return [...cadena2LowerCase].every(letra => [...cadena1LowerCase].includes(letra));
}

console.log(compararCadenas(['hello', 'hey'])) //false
console.log(compararCadenas(['hello', 'hello'])) //true
console.log(compararCadenas(['React', 'cat'])) //true

