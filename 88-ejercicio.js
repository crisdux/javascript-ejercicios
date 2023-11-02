// Dada una cadena s que contiene solo los caracteres '(', ')', '{', '}', '[' y ']', determine si la cadena de entrada es válida.

const verificarCorchetes = (cadena) => {
    let stack = [];
    let open = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let close = {
        ")": true,
        "}": true,
        "]": true
    }
    for (let i = 0; i < cadena.length; i++) {
        if (open[cadena[i]]) {
            console.log(cadena[i])
            stack.push(cadena[i]);
            console.log("stack", stack)
        } else if (close[cadena[i]]) {
            console.log(cadena[i])
            if (open[stack.pop()] !== cadena[i]) {
                return false;
            }
        }

    }
    return stack.length === 0;

}

console.log(verificarCorchetes("()")) //true
// console.log(verificarCorchetes("([ ))")) // false
// console.log(verificarCorchetes("{ [) }")) // false
// console.log(verificarCorchetes("Hola como estas (yo estoy bien), [ tu ?")) // false