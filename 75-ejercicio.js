// Escriba una función para convertir un objeto en una matriz de matrices que contengan clave y valor.

const objectToArray = (obj) => {
    return Object.entries(obj)
}

console.log(objectToArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]
console.log(objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) ) 
// [["name", "Will Smith"], ["dob", "15-09-1968"]]);

