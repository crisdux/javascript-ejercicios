// dada un arrglo de colores estimar si un color dado esta en dicho arreglo
const perteneceArray = (arr, color) => {
  return arr.includes(color);
};

console.log(
  perteneceArray(["azul", "amarillo", "rojo", "verde", "café", "rosa"], "rojo")
); // true
console.log(
  perteneceArray(
    ["azul", "amarillo", "rojo", "verde", "café", "rosa"],
    "violeta"
  )
); //false
