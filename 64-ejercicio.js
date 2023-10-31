// dado el arreglo students, regresar un nuevo arreglo con los campos
// name y average con los nombres y el promedio de las notas de cada estudiante
// regresar solo aquellos que tengan un promedio superior a 90 puntos
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];

const averageStudets = (arr) => {
  return arr.map(({name, scores}) => {
    return {
      name,
      average: scores.reduce((acc, item) =>acc +item,0) / scores.length
    }
  }).filter(({ average }) => average > 90)
}

console.log(averageStudets(students))