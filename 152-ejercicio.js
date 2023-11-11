// Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina

const getEstaciones = (mes) => {
  switch (mes) {
    case "primavera":
      return "21 de septiembre a 20 de diciembre";
    case "verano":
      return "21 de diciembre a 20 de marzo";
    case "otoño":
      return "21 de marzo a 20 de junio";
    case "invierno":
      return "21 de junio a 20 de septiembre";
  }
};

console.log(getEstaciones("primavera"));
console.log(getEstaciones("otoño"));
