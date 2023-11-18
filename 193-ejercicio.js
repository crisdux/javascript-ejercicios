// Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

const getBoxVolume = (size) => {
    const { width, length, height} = size;
    return width * length * height
}
const size = { width: 2, length: 5, height: 1 }
console.log(getBoxVolume(size)) // returns 10
