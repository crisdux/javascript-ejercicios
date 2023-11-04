// dado una cedena eliminar todas los espacios, puntos y comas

const elminarEspacios = (cadena) => {
    return cadena.split(" ").join("").split(".").join("").split(",").join("")
  }
  
  const elminarEspacios2 = (cadena) => {
    const elementos = [" ", ",", "."];
    const res = [...cadena].filter((palabra) => !elementos.includes(palabra));
    return res.join("")
  }
  
  
  // console.log(elminarEspacios("Boca vs Fluminense")) // BocavsFluminense
  // console.log(elminarEspacios("Hola mundo, me llamo Cris. Soy Programador"))
  // // HolamundomellamoCrisSoyProgramador
  
  console.log(elminarEspacios2("Boca vs Fluminense")) // BocavsFluminense
  console.log(elminarEspacios2("Hola mundo, me llamo Cris. Soy Programador"))
  // HolamundomellamoCrisSoyProgramador