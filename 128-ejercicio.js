// sumar el min y el max de un arr sin usar Math.min y Math.max

const sumaMinMax = (arr) => {
    let ordenarArr = arr.sort((a, b) => a-b)
    return ordenarArr.at(0) + ordenarArr.at(-1)
}

console.log(sumaMinMax([3, 9, 6])) // 12
console.log(sumaMinMax([67, 35, 54, 26])) // 93
console.log(sumaMinMax([5, 9, 2, 4, 5, 7])) // 11