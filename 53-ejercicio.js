// dado un array anidado, convertirlo en un objeto 
// Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

const fromPairs = (array) => {
    return array.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    },{})
}

console.log(fromPairs([['a', 1], ['b', 2]] ))