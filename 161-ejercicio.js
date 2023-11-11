// Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después.

const samFrodo = (nombres) => {
  let arrNombres = nombres.split(" ");
  return arrNombres.some((item, i, arr) => {
    if (
      (item === "Sam" && arr[i + 1] === "Frodo") ||
      (item === "Frodo" && arr[i + 1] === "Sam")
    ) {
      return true;
    }
  });
};

console.log(samFrodo("Sam Frodo Legolas")); //true
console.log(samFrodo("Sam Orco Frodo")); //false
console.log(samFrodo("Frodo Sam Gandalf")); //true
console.log(samFrodo("Gandalf Sam Frodo")); //true
