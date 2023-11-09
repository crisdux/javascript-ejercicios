// realizar un contador de letras

const contadorLetras = (arr) => {
  return arr.reduce((acc, letra) => {
    if (!acc[letra]) {
      acc[letra] = 1;
    } else {
      acc[letra]++;
    }
    return acc;
  }, {});
};
const letras = ["a", "b", "a", "c", "b", "a", "d", "b", "c", "c"];
console.log(contadorLetras(letras));
