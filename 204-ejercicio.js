// Crear una función que dado un string devuelva un objeto con cada palabra que hay y la cantidad de veces que aparece. La función debe ignorar el caso ("JavaScript" y "javascript" cuentan como una misma palabra) y el objeto devuelto debe tener todas sus propiedades en minúscula

const countWords = (str) => {
    let strLower = str.split(" ").map((item) => item.toLowerCase())
    return strLower.reduce((acc, item) => {
        if (acc[item]) {
            acc[item]++
        } else {
            acc[item] = 1
        }
        return acc;
    }, {})

}
console.log(countWords("El que compra Pocas capas pocas capas paga"))
// returns { el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1 }