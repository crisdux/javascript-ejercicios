//capitalizar cada letra
const capitalizar = (cadena) => {
    if(cadena.length === 0) return ""
    const salida = cadena.split(" ").map((letra) => {
        return res = letra.at(0).toUpperCase() + letra.slice(1)
    })
    return salida.join(" ")
}

console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""