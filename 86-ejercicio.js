// Implemente una función de JavaScript que tome una matriz de números y devuelva una nueva matriz con los números en orden inverso.


const sevenBoom = (array) => {
    const arrDesmenusadoString = array.flatMap((item) => String(item).length > 1 ? String(item).split("") : String(item))
    const arrDesmenusadoNumber = arrDesmenusadoString.map((number) => Number(number))
    return arrDesmenusadoNumber.includes(7) ? "Boom!" : "there is no 7 in the array"
  }
  
  console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) //➞ "Boom!"
  // 7 contains the number seven.
  
  console.log(sevenBoom([8, 6, 33, 100])) //➞ "there is no 7 in the array"
  // None of the items contain 7 within them.
  
  console.log(sevenBoom([2, 55, 60, 97, 86])) //➞ "Boom!"
  // 97 contains the number seven.
  
  