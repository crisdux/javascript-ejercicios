// contar la cantidad del caracter en la cedena
const contarCaracteres  = (cadena, caracter) => {
    let cadenaRes = cadena.toLowerCase().split(" ")
    return cadenaRes.filter((palabra) => palabra.includes(caracter)).length
  };
  
  console.log(contarCaracteres ("Hola, mundo en JavaScript", "j")); //2
  console.log(contarCaracteres ("Javascript es genial", "p")); // 1