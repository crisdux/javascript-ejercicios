// obtener el promedio ponderado

const cursos = [
  { nombre: "Matemáticas", creditos: 3, calificacion: 90 },
  { nombre: "Historia", creditos: 4, calificacion: 85 },
  { nombre: "Inglés", creditos: 2, calificacion: 88 },
];

const calcularPromedioPonderado = (cursos) => {
  return (
    cursos.reduce(
      (acc, curso) => acc + curso.creditos * curso.calificacion,
      0
    ) / cursos.reduce((acc, curso) => acc + curso.creditos, 0)
  ).toFixed(2);
};

console.log(calcularPromedioPonderado(cursos));
