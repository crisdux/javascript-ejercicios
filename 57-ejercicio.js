// aplanar un arreglo anidado: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

const flatArray = (array) => {
    return array.flat(Infinity)
  }
  
  console.log(flatArray([1, 2, [3, 4, [5]]]))