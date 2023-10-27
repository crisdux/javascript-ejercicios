// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// extraer todos los valores falsy de un arreglo

const compact = (arr) => {
    return arr.filter(Boolean)
} 

console.log(compact([0, 1, false, 2, undefined, '', 3, null]))