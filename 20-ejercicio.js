// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
// Guardar cada nuevo valor en un arreglo y retornarlo.
// Si en algún momento el valor de la suma de los valores es mayor o igual a 150, parar 
// y mostrar el mensaje "interrumpido"
// [PISTA]: utiliza el statement 'break'.
// Tu código
function iterarAumentandoDeDosEnDos(num) {
    const arr = []
    for (let i = 0; i < 10; i++) {
      num += 2;
      arr.push(num);
    }
    let suma = arr.reduce((item, acc) => acc + item, 0)
    if(suma > 150){
      return "interrumpido"
    }
    return arr;
  }
  
  console.log(iterarAumentandoDeDosEnDos(5)) // [5, 7, 9, 11, 13, 15, 17, 19, 21, 23]
  console.log(iterarAumentandoDeDosEnDos(6)) // [6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
  console.log(iterarAumentandoDeDosEnDos(1)) // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  console.log(iterarAumentandoDeDosEnDos(0)) // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
  
  
  