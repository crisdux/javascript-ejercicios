// eliminar los duplicados de un arreglo dado 

const eliminarDuplicados = (arr) => {
    return [... new Set(arr)];
  }
  console.log(eliminarDuplicados([1,2,3,1,2]))