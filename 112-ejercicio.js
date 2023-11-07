// Escribe una función en JavaScript que tome un array de objetos como entrada. Cada objeto representa un estudiante y tiene las siguientes propiedades: nombre (una cadena de texto) y calificaciones (un array de números). La función debe ordenar el array de objetos en orden ascendente según el promedio de las calificaciones de los estudiantes.

const estudiantes = [
  { nombre: "Alice", calificaciones: [85, 90, 88] },
  { nombre: "Bob", calificaciones: [92, 89, 95] },
  { nombre: "Charlie", calificaciones: [78, 88, 80] },
  { nombre: "David", calificaciones: [88, 92, 90] },
];

const ordenarPorCalificacionPromedio = (arr) => {
  return arr
    .map(({ nombre, calificaciones }) => {
      return {
        nombre,
        calificaciones,
        promedio: (
          calificaciones.reduce((acc, item) => acc + item, 0) /
          calificaciones.length
        ).toFixed(2),
      };
    })
    .sort((a, b) => b.promedio - a.promedio);
};

console.log(ordenarPorCalificacionPromedio(estudiantes));
