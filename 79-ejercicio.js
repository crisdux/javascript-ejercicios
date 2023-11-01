// Dada una matriz de objetos, devuelve la suma de la edad de todos los objetos.

const sumaEdades = (array) => {
    return array.reduce((acc,item) => acc + item.age,0)
}

console.log(sumaEdades([{name: 'John', age: 20}, {name: 'Jane', age: 30}, {name: 'Jack', age: 40}])) //90
console.log(sumaEdades( [{name: 'John', age: 20}, {name: 'Jane', age: 30}])) //50
console.log(sumaEdades([{name: 'John', age: 20}])) //20