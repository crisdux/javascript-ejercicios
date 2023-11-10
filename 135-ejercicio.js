// Escribir una función llamada numAsteriscos que reciba una matriz(un arreglo de arreglos) y retorne el número de asteriscos:

const numAsteriscos = (arr) => {
  return arr.flat().filter((item) => item === "*").length;
};

console.log(
  numAsteriscos([
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ])
);
// 5
