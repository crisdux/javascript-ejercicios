// Escribe una función en JavaScript que tome un array de números como entrada y ordene los números en orden descendente utilizando el método sort(). Sin embargo, hay un pequeño giro en este ejercicio: los números impares deben aparecer antes que los números pares en el array ordenado. Esto significa que primero se deben ordenar los números impares de mayor a menor, y luego los números pares de mayor a menor. Utiliza el método sort() para ordenar el array, y asegúrate de manejar adecuadamente las comparaciones numéricas.

const separarArr = (arr) => {
  const arrPares = arr.filter((item) => item % 2 === 0);
  const arrImapres = arr.filter((item) => item % 2 !== 0);
  return [arrImapres, arrPares];
};
console.log(separarArr([5, 2, 9, 1, 5, 6]));

const ordenarArr2 = (arr) => {
  return [...arr[0].sort((a, b) => b - a), ...arr[1].sort((a, b) => b - a)];
};
console.log(ordenarArr2(separarArr([5, 2, 9, 1, 5, 6])));
