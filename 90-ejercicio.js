// dado un arr de estudiantes, filtrar aquellos que tengan un promedio mayor a 90
// ordenar los resultados de manera ascendente por nombre

const estudiantes = [
    { nombre: "Juan", edad: 18, calificaciones: [95, 89, 92, 97] },
    { nombre: "María", edad: 17, calificaciones: [91, 88, 94, 98] },
    { nombre: "Luis", edad: 19, calificaciones: [87, 90, 92, 96] },
];

// regresar el campo nombrem edad, calificacion y agregar el campo promedio, con el promedio de cada estudiante

const estudianteSobresaliente = (arr) => {
    return arr.map((estudiante) => {
        const promedio = estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0) / estudiante.calificaciones.length;
        return { ...estudiante, promedio: promedio };
    }).filter((estudiante) => estudiante.promedio > 90);
}

console.log(estudianteSobresaliente(estudiantes));

