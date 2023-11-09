// dado un array y un objetivo, regresar un arreglo anidado formando pares de numeros que sumados sena igual al numero objetivo

function encontrarParejas(arr, objetivo) {
    const numIndices = {};
    const parejas = [];
  
    arr.forEach((num, index) => {
      const complemento = objetivo - num;
      console.log(complemento)
      if (numIndices[complemento] !== undefined) {
        
        console.log(numIndices, parejas)
        parejas.push([complemento, num]);
      }
      numIndices[num] = index;
    });
  
    return parejas;
  }
  
  const numeros = [3, 1, 5, 8, 2, 6, 4];
  const objetivo = 9;
  console.log(encontrarParejas(numeros, objetivo))