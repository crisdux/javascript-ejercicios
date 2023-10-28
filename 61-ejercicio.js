//data un objeto, elminar la llave pasada como argumento
//({ a: 1, b: 2 }, 'b') => { a: 1 }

const eliminarLlave = (obj, ...rest) => {
    rest.forEach((item) => {
      delete obj[item]
    });
    return obj;
  }
  
  console.log(eliminarLlave({ a: 1, b: 2 }, 'b', 'a'))