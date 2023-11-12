const puntajes = (
  puntajesJugadora1,
  nombreJuagadora1,
  puntajesJugadora2,
  nombreJuagadora2
) => {
  if (puntajesJugadora1.length !== puntajesJugadora2.length)
    return "Ambas jugadoras deben tener la misma cantidad de partidas";
  let contadorJugadora1 = 0;
  let contadorJugadora2 = 0;
  for (let i = 0; i <= puntajesJugadora1.length; i++) {
    if (puntajesJugadora1[i] > puntajesJugadora2[i]) {
      contadorJugadora1++;
    } else if (puntajesJugadora1[i] < puntajesJugadora2[i]) {
      contadorJugadora2++;
    }
  }
  return {
    [nombreJuagadora1]: contadorJugadora1,
    [nombreJuagadora2]: contadorJugadora2,
    resultado: `${contadorJugadora1} (${nombreJuagadora1}) vs ${contadorJugadora2} (${nombreJuagadora2})`,
    ganadora:
      contadorJugadora1 > contadorJugadora2
        ? nombreJuagadora1
        : nombreJuagadora2,
  };
};

console.log(puntajes([5, 6, 3, 1, 8], "Luisa", [8, 2, 4, 2, 3], "Pepa"));
console.log(puntajes([5, 6, 3, 1, 8], "Luisa", [8, 2, 4, 2, 8], "Pepa"));
console.log(puntajes([5, 6, 3, 1, 8, 1], "Luisa", [8, 2, 4, 2, 8], "Pepa"));
