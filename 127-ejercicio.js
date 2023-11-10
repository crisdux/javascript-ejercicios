const min = (arr) => {
    let ordenarArr = arr.sort((a, b) => a-b)
    return ordenarArr.at(0)
}

console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2