

const removeProperties = (data, props) => {
    for(key in data){
        if(props.includes(key)){
            delete data[key]
        }
    }
    return data
}
console.log(removeProperties({ a: 1, b: 2, c: 3 }, ["c"])) // returns {a: 1}