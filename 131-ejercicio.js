// regresar todas las palabras de un arreglo que terminen en s
const terminanConS =(arr)=> {
    return arr.filter((palabra) => {
        let ultimaLetra = palabra.at(-1);
        return ultimaLetra === "s"
    })
}


console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []