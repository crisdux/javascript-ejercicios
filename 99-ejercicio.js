//obtener el promedio de edades del arreglo dado
const personas = [
  { nombre: "Alice", edad: 30 },
  { nombre: "Bob", edad: 45 },
  { nombre: "Charlie", edad: 28 },
  { nombre: "David", edad: 35 },
];

const promedioEdades = (personas) => {
  return personas.reduce((acc, { edad }) => acc + edad, 0) / personas.length;
};
console.log(promedioEdades(personas));
