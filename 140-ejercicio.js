// Hacer una función que reciba una string y retorne la misma string pero agregando después de cada caracter su í­ndice correspondiente.

const agregarIndice = (str) => {
  return Array.from(str)
    .map((item, i) => `${item}${i}`)
    .join("");
};
console.log(agregarIndice("kawabonga")); // imprime "k0a1w2a3b4o5n6g7a8"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"
