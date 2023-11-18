/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 *
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

// no usar Set
const removeDuplicates = (arr) => {
    let res = []
    for(let i = 0; i<arr.length; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res; // [4, 5, 10, 2]

}

console.log(removeDuplicates([4, 5, 10, 4, 10, 2]))