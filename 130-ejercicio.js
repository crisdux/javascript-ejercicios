// regresar todas las palabras que empiecen por a

const empiezanConA = (arr) => {
    const A = ["a", "A", "á", "Á"];
    return arr.filter((item) => A.includes(item.at(0)))
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []