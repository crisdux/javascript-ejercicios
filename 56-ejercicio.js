//escribir una funcion que compare dos arreglos y regrese true si son iguales, false si son diferentes

const isEqual = (firstArray, secondArray) => {
    return JSON.stringify(firstArray) === JSON.stringify(secondArray)
  }
  
  const isEqual2 = (firstArray, secondArray) => {
    return firstArray.length === secondArray.length && firstArray.every((item, index) => item === secondArray[index])
  }
  
  console.log(isEqual([1,2,3],[1,2,3]))
  console.log(isEqual2([1,2,3],[1,2,3]))
  console.log(isEqual2([1,2,3],[1,2,3,4]))
  console.log(isEqual([1,2,3],[1,2,3,4]))