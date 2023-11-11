// Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella.

const calculadora = (op, x, y) => {
  switch (op) {
    case "SUMA":
      return x + y;
    case "RESTA":
      return x - y;
    case "MULTIPLICACION":
      return x * y;
    case "DIVISION":
      return y !== 0 ? x / y : "no div 0";
  }
};

console.log(calculadora("SUMA", 52, 9));
console.log(calculadora("MULTIPLICACION", 2, 5));
console.log(calculadora("DIVISION", 5, 0));
console.log(calculadora("DIVISION", 10, 5));
