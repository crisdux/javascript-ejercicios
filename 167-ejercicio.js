// Crear un programa que pida ingresar números separados por espacios y luego pregunte por cuánto se desea multiplicar cada número. El programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.

const multiplicarArr = (x, ...arr) => {
  return arr.map((item) => item * x);
};

// Ingrese números: 5 7 15 22 40
// Ingrese multiplicador: 2

// El array resultante es: [10, 14, 30, 44, 80]

console.log(multiplicarArr(2, 5, 7, 15, 22, 40));
