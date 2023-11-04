// contar la cantidad del caracter en la cedena
const contarCaracteres = (cadena, caracter) => {
  let contador = 0;
  return [...cadena].filter((palabra) => palabra.includes(caracter)).length;
};

console.log(contarCaracteres("Hola, mundo en JavaScript", "o")); //2
console.log(contarCaracteres("Javascript es genial", "p")); // 1
