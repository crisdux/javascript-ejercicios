// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe.El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no.

const verificarValor = (numeros, valor) => {
    let arrNumeros = numeros.split(" ").map((item) => Number(item));
    return arrNumeros.includes(valor)
}

// Ingrese valores: 5 7 99 34 54 2 12
// Ingrese valor a buscar: 54
// return:true
console.log(verificarValor("5 7 99 34 54 2 12", 54))