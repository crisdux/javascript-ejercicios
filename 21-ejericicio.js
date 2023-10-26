// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
// Guardar cada nuevo valor en un array y retornarlo.
// Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
// se continua con la siguiente iteración.
// [PISTA]: utiliza el statement 'continue'.
// Tu códig

function continueStatement(num) {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      if (i === 5) {
        num += 2; // Aumentar num solo si es la quinta iteración
        continue; // Saltar la iteración 5
      }
      num += 2; // Aumentar num en todas las demás iteraciones
      arr.push(num);
    }
    return arr;
  }
  
  console.log(continueStatement(3)) 
  console.log(continueStatement(6)) 
  console.log(continueStatement(1)) 
  console.log(continueStatement(0)) 
  
  