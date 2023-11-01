// Escriba una función que devuelva una nueva matriz de valores verdaderos y falsos basada en la matriz de entrada. La función debería devolver verdadero si el elemento correspondiente es un archivo JavaScript.

const isJavaScriptFile = (array) => {
    return array.map(file => file.endsWith('.js'));
}

console.log(isJavaScriptFile(['L-B.js', 'L-B.css', 'L-B.html', 'L-B.js'])); 
// [true, false, false, true]
console.log(isJavaScriptFile(['L-B.js', 'L-B.js', 'L-B.js', 'L-B.js'])); 
// [true, true, true, true]
console.log(isJavaScriptFile(['L-B.css', 'L-B.css', 'L-B.css', 'L-B.css'])); 
// [false, false, false, false]