// un contador de vocales
const contadorVocales = (cadena) => {
  const vocales = ["a", "e", "i", "o", "u"];
  const arrCadena = cadena.toLowerCase().split("");
  return arrCadena.filter((letra) => vocales.includes(letra)).length;
};

console.log(contadorVocales("JavaScript")); // 3
console.log(contadorVocales("Javascript es genial"));
