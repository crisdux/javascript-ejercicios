//aliminar los elementos repetidos de un arreglo, pasados por una lista
const eliminarElementos = (array, ...list) => {
    return array.filter((item) => {
      return !list.includes(item)
    })
  }
  
  console.log(eliminarElementos([1,2,1,3,2], 1,2)) // [3]
  console.log(eliminarElementos([0,1,2,3,4,5], 1,2,3)) // [0,4,5]