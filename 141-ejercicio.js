// Hacer una función que reciba un array de strings y retorne una string igual a la concatenación de todos sus elementos.

const concatenar = (arr) => {
  return arr.join("");
};

console.log(concatenar(["s", "a", "r", "a", "s", "a"])); // imprime "sarasa"
console.log(concatenar(["h", "o", "l", "a"])); // imprime "hola"

const concatenar2 = (arr) => {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};

console.log(concatenar2(["s", "a", "r", "a", "s", "a"])); // imprime "sarasa"
console.log(concatenar2(["h", "o", "l", "a"])); // imprime "hola"
