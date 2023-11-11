const interseccion = (arr1, arr2) => {
    let agrupar = Object.groupBy(arr1.concat(arr2), (item) => item)
    let res = Object.values(agrupar).filter((arr) => arr.length >= 2).flat();
    return [...new Set(res)]
}
console.log(interseccion([1, 2, 3,5], [1, 2, 4,5])) // [1,2]
// [1, 2, 3, 1, 2, 4,5,2]
// 1:2
// 2:3,
// 3:1
// 4:1
// 5:1