// dado n mes en numero imprimer que mes es en string
//Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.

const getMes = (numeroMes) => {
    switch(numeroMes){
        case 1:
            return "Enero";
        case 2:
            return "Febrero";
        case 3:
            return "Marzo";
        case 4:
            return "Abril";
        case 5:
            return "Mayo";
        case 6:
            return "Junio";
        case 7:
            return "Julio";
        case 8:
            return "Agosto";
        case 9:
            return "Septiembre";
        case 10:
            return "Octubre";
        case 11:
            return "Noviembre";
        case 12:
            return "Diciembre";
        default:
            return false;
        
    }
}

console.log(getMes(2))
console.log(getMes(12))