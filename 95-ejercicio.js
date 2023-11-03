// obtener un objeto con el promedio de calificaciones por estudiante
const calificaciones = {
  Juan: {
    Matemáticas: 90,
    Historia: 85,
    Ciencias: 92,
  },
  Pedro: {
    Matemáticas: 88,
    Historia: 92,
    Ciencias: 89,
  },
  Carlos: {
    Matemáticas: 95,
    Historia: 78,
    Ciencias: 88,
  },
};

const calcularPromedioPorEstudiante = (objCalificaciones) => {
  for (const [nombre, calificaciones] of Object.entries(objCalificaciones)) {
    let sumaCalificaciones = 0;
    for (const [materia, calificacion] of Object.entries(calificaciones)) {
      sumaCalificaciones += calificacion;
    }
    console.log(
      nombre,
      sumaCalificaciones / Object.keys(calificaciones).length
    );
  }
};

calcularPromedioPorEstudiante(calificaciones);
