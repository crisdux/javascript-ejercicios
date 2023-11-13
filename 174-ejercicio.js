// Crear un programa que dado un array 2d de strings, indique cuál es la cantidad de una de sus ítems. El programa debe dar la posibilidad de ingresar qué item se desea buscar
const cuentaItem = (matriz, item) => {
  let arr = matriz.flat();
  return Object.groupBy(arr, (fruta) => fruta === item).true.length;
};

console.log(
  cuentaItem(
    [
      ["🍎", "🍏", "🍌", "🍌"],
      ["🍌", "🍎"],
      ["🍎", "🍏", "🍌"],
      ["🍏", "🍌", "🍎", "🍌"],
    ],
    "🍎"
  )
);

console.log(
  cuentaItem(
    [
      ["🍎", "🍏", "🍌", "🍌"],
      ["🍌", "🍎"],
      ["🍎", "🍏", "🍌"],
      ["🍏", "🍌", "🍎", "🍌"],
    ],
    "🍏"
  )
);

console.log(
  cuentaItem(
    [
      ["🍎", "🍏", "🍌", "🍌"],
      ["🍌", "🍎"],
      ["🍎", "🍏", "🍌"],
      ["🍏", "🍌", "🍎", "🍌"],
    ],
    "🍌"
  )
);
