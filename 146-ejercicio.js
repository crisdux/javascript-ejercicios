// Crear un array vacío, luego generar 20 números al azar entre 1 y 10 y guardarlos en un array.

const agregarArregloRandom = () => {
  const limite = 20;
  const numerosArr = [];
  for (let i = 0; i < limite; i++) {
    const random = Math.floor(Math.random() * 10) + 1;
    numerosArr.push(random);
  }
  return numerosArr;
};

console.log(agregarArregloRandom());
