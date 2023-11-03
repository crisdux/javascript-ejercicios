// dato un arreglo de nombres, obtener la inicial de cada nombre en un nuevo arreglo

const getIniciales = (nombres) => {
  return nombres.map((nombreCompleto) => {
    const agruparNombres = nombreCompleto.split(" ");
    return agruparNombres
      .map((nombresSueltos) => nombresSueltos.at(0))
      .join("");
  });
};

console.log(
  getIniciales([
    "Alice Johnson Suarez",
    "Bob Brown",
    "Charlie Davis",
    "David Smith Chavez",
  ])
);
