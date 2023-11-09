// regresar los valores duplicados de un arreglo en otro arreglo
const repetidos = (numeros) => {
    return numeros.filter((numero, index) => {
        console.log(numeros.indexOf(numero), index);
        return numeros.indexOf(numero) !== index
    })
};

console.log(repetidos([3, 1, 4, 2, 5, 3, 6, 2, 7]));
