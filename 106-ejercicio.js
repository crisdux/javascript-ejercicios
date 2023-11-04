// remplaza las vocales por _
const transformaVocales = (cadena) => {
  const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const res = [...cadena].map((letra) =>
    vocales.includes(letra) ? "_" : letra
  );
  return res.join("");
};

console.log(transformaVocales("Hola, mundo en JavaScript"));
console.log(transformaVocales("Javascript es genial"));
