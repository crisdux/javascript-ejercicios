// Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono.

const monosBananas = (arr, cantidadBanana) => {
  let monosArr = arr.filter((item) => item === "mono");
  let bananasArr = arr.filter((item) => item === "banana");
  console.log(monosArr.length, bananasArr.length);
  return bananasArr.length >= monosArr.length * cantidadBanana
    ? "mono feliz"
    : "mono triste";
};

console.log(
  monosBananas(
    ["mono", "banana", "banana", "banana", "mono", "banana", "mono", "banana"],
    2
  )
); // mono triste

console.log(
  monosBananas(["mono", "banana", "mono", "banana", "mono", "banana"], 1)
); // mono feliz

console.log(monosBananas(["mono", "banana", "banana"], 1)); // mono feliz
