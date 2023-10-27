// convertir un arreglo de millas a km
// regresar el total del arreglo convertido
const convertMilesToKilometers = (miles) =>{
    if(!Array.isArray(miles)) return "Debes ingresar un array"
    if(miles.some((mile) => typeof mile !== "number")) return "Debe ser un arreglo de numeros"
    return miles.map((mile) => mile* 1.60934).reduce((item,acc) => item + acc,0)
}

console.log(convertMilesToKilometers([1,2,3]));
console.log(convertMilesToKilometers([1,2,3,4,5]));
console.log(convertMilesToKilometers([1,2,"3",4,5]));