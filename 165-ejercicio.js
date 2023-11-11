// Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: nombre usuaria + está conectada

// Para dos usuarias, debe mostrar: nombre usuaria 1 + y +  nombre usuaria 2 + están conectadas

// Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas

const chat = (usuarias) => {
  let arrUsuarias = usuarias.split(" ");
  console.log(arrUsuarias);
  if (arrUsuarias.length === 1) {
    return `${arrUsuarias[0]} esta conectada`;
  }
  if (arrUsuarias.length === 2) {
    return `${arrUsuarias[0]}, ${arrUsuarias[1]} estan conectadas`;
  }
  if (arrUsuarias.length > 2) {
    let aux = arrUsuarias.slice(2).length;
    return `${arrUsuarias[0]}, ${arrUsuarias[1]} y ${aux} persona(s) mas estan conectadas`;
  }
};

console.log(chat("Alicia Juana Pepa Carmen"));
console.log(chat("Alicia"));
console.log(chat("Alicia Sofia Ana"));
console.log(chat("Alicia Sofia"));
