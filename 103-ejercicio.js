// Escribe una función llamada reversoPalabra que tome una cadena de palabras como entrada y devuelva una nueva cadena donde cada palabra esté invertida, pero el orden de las palabras se mantenga igual.

const reversoPalabra = (str) => {
  const strArr = str.split(" ");
  const salida = strArr.map((palabra) => {
    if (!palabra.includes(",")) {
      return [...palabra].reverse().join("");
    } else {
      let indice = palabra.indexOf(",");
      let coma = palabra.at(-1);
      let parte1 = palabra.substring(0, indice);
      return [...parte1].reverse().join("") + coma;
    }
  });
  return salida.join(" ");
};

console.log(reversoPalabra("Hola, mundo en JavaScript"));
console.log(reversoPalabra("Hola mundo en JavaScript"));
console.log(reversoPalabra("Como estas? yo bien, y tu?"));
