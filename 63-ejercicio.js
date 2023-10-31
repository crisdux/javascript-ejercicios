// verificar que dos objetos planos son iguales

const isEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }))
console.log(isEqual({ a: 1, b: 1 }, { a: 1, c: 3 }))
console.log(isEqual({ }, { }))
console.log(isEqual({ a:undefined }, { a:undefined }))
console.log(isEqual({ a: {b:2} }, { a: {b:2} }))