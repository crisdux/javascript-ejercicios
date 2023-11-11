const capitalizar = (cadena) => {
    if(cadena.length === 0) return ""
    return `${cadena.at(0).toUpperCase()}${cadena.slice(1)}`
}

console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""