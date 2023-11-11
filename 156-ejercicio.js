// Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:
const saludos = (nombres) => {
    let arrNombres = nombres.split(" ")
    let arrNombresSaludo = arrNombres.map((nombre) => `¡Hola ${nombre}!`)
    for(let i=0; i<=arrNombresSaludo.length; i++){
        console.log(arrNombresSaludo[i])
    }
}

saludos("Ada Greta Grace")

// ¡Hola Ada!
// ¡Hola Greta!
// ¡Hola Grace!