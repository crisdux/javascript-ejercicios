// escribir una funcion que verifique si un objeto esta vacio 
// Empty values: '', null, NaN, undefined

const isEmpty = (obj) => {
    const values = Object.values(obj)
    const vacios = [undefined, null, "", NaN]
    return values.every(value => vacios.includes(value))
    
}

console.log(isEmpty({})) // true
console.log(isEmpty({a: undefined})) // true
console.log(isEmpty({a : ""})) // true
console.log(isEmpty({a :null})) // true
console.log(isEmpty({a: NaN})) // true

console.log(isEmpty({a:"Hola"})) // false