// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array



const removeProperties = (data, props) => {
    const res = {}
    for(key in data){
        if(props.includes(key)){
            res[key]= data[key]
        }
    }
    return res
}
console.log(removeProperties({ a: 1, b: 2, c: 3 }, ["c"])) 
console.log(removeProperties({ a: 1, b: 2, c: 3 }, ["c", "b"])) 