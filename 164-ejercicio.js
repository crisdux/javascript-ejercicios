// Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro.
const perrosGatos = (arr) => {
    const perros = arr.filter((item) => item === "🐶")
    const gatos = arr.filter((item) => item === "🐱")
    return perros.concat(gatos)
}
console.log(perrosGatos(["🐶","🐱","🐶","🐱","🐱","🐶","🐶"]))

// Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// Resultado: 🐶🐶🐶🐶🐱🐱🐱
