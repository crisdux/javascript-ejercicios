// contar los carecteres de "a" en el string

const contarAes = (cadena) => {
    return [...cadena].filter((letra) => letra === "a").length
}

console.log(contarAes("abracadabra"))

