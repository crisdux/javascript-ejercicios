// Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2.

const multiplyNumeric = (obj) => {
    let aux = Object.entries(obj).map((item) => typeof item[1] === "number" ? [item[0], item[1] * 2] : [item[0], item[1]])
    return Object.fromEntries(aux)
}

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};
console.log(multiplyNumeric(menu))