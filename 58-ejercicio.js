// dado un arreglo, anidar los items segun un 2do parametro dado

const chuck = (array, size) => {
    const resultado = [];
    let index = 0;
    const longitud = array.length;
    while (index < longitud) {
        resultado.push(array.slice(index, index + size));
        index += size;
    }
    return resultado;
}

console.log([1,2,3,4,5,6,7], 3)