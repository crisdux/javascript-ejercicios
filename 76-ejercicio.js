// Implemente una función de JavaScript que tome una matriz de números y devuelva una nueva matriz con los números en orden inverso.


const reverseArray = (arr) => {
    const res = []
    for(let i = arr.length - 1; i>=0; i--){
        res.push(arr[i])
    }
    return res;
}


console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]