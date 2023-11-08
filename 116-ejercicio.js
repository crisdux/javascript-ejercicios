// sumar los digitos individuales de un numero dado hasta que el numero resultante solo tenga un digito
const sumaDigitos = (numero) => {
  while (numero >= 10) {
    let ultimo = numero % 10;
    let primeros = Math.trunc(numero / 10);
    numero = ultimo + primeros;
  }
  return numero;
};

console.log(sumaDigitos(318)); // 3

/*
    318: 3 + 1 + 8 = 12
    12: 1 + 2 = 3
*/
