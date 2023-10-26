// El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
// Tu código:
function mesesDelAño(array) {
    const meses = [];
    const mesesBase = ["Enero", "Marzo", "Noviembre"];
    array.forEach(element => {
        if(element === "Enero" || element === "Marzo" || element === "Noviembre") meses.push(element)
    });
    return (JSON.stringify(meses) === JSON.stringify(mesesBase)) ? meses : "No se encontraron los meses pedidos"
  
  }
  
  console.log(mesesDelAño(["Diciembre", "Enero", "Marzo", "Noviembre", "Julio"]))
  console.log(mesesDelAño(["Enero", "Julio"]))
  console.log(mesesDelAño(["Enero"]))