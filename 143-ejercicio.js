// Hacer una función que reciba un objeto el cual posee propiedades con valores de string y retorne una string cómo resultado de la concatenación de todos los valores de las propiedades del objeto. 

const concatenarObj = (obj) => {
    return Object.values(obj).join("")
}

console.log(concatenarObj({ a: "h", b: "o", c: "l", d: "a" })); // imprime "hola"
console.log(concatenarObj({ z: "sa", x: "ra", y: "sa" })); // imprime "sarasa"