//piedra papel o tijera
const generaJugadaPC = () => {
  let random = Math.floor(Math.random() * 3); // 0 1 2
  switch (random) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    case 2:
      return "tijera";
    default:
      return "Jugada incorrecta";
  }
};

const piedraPapelTijera = (jugadaUser) => {
  let jugadaPc = generaJugadaPC();
  if (jugadaUser === jugadaPc)
    return { user: jugadaUser, pc: jugadaPc, gana: "empate" };
  if (jugadaUser === "piedra" && jugadaPc === "papel")
    return { user: jugadaUser, pc: jugadaPc, gana: "gana pc" };
  if (jugadaUser === "piedra" && jugadaPc === "tijera")
    return { user: jugadaUser, pc: jugadaPc, gana: "gana user" };
  if (jugadaUser === "papel" && jugadaPc === "piedra")
    return { user: jugadaUser, pc: jugadaPc, gana: "gana user" };
  if (jugadaUser === "papel" && jugadaPc === "tijera")
    return { user: jugadaUser, pc: jugadaPc, gana: "gana pc" };
  if (jugadaUser === "tijera" && jugadaPc === "piedra")
    return { user: jugadaUser, pc: jugadaPc, gana: "gana pc" };
  if (jugadaUser === "tijera" && jugadaPc === "papel")
    return { user: jugadaUser, pc: jugadaPc, gana: "gana user" };
};

console.log(piedraPapelTijera("papel"));
