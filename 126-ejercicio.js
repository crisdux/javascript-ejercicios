const max = (arr) => {
    let ordenarArr = arr.sort((a, b) => a-b)
    return ordenarArr.at(-1)
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9