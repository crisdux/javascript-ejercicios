// crear una fn contarOcurrencias que cuente cuentas veces se repite una letra en un strign dado

const contarOcurrencias = (str, letra) => {
  return str.split("").filter((item) => item === letra).length;
};

console.log(contarOcurrencias("sarasa", "a")); // imprime 3
console.log(contarOcurrencias("sarasa", "z")); // imprime 0

const contarOcurrencias2 = (str, letra) => {
  let contador = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === letra) contador++;
  }
  return contador;
};
console.log(contarOcurrencias2("sarasa", "a")); // imprime 3
console.log(contarOcurrencias2("sarasa", "z")); // imprime 0
