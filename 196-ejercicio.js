// escribir una funcion que verifique si un objeto esta vacio 
const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
}

console.log(isEmpty({}))
console.log(isEmpty({a:1}))
console.log(isEmpty({a:null}))
console.log(isEmpty({a:undefined}))
