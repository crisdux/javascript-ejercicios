// Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
// Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
// si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
// Tu código:
function diaDeLaSemana(numeroDeDia) {
    if(numeroDeDia < 1 || numeroDeDia > 7) return "Debe ser un numero entre 1 y 7";
    if(typeof numeroDeDia !== "number") return "El aprametro debe ser un numero"
    const DiasSemana = {
        1:"Domingo",
        2:"Lunes",
        3:"Martes",
        4:"Miercoles",
        5:"Jueves",
        6:"Viernes",
        7:"Sabado"
    }

    if(DiasSemana[numeroDeDia] == "Domingo" || DiasSemana[numeroDeDia] == "Sabado"){
        return "Es fin de semana"
    }else{
        return "Es dia laboral"
    }
}

console.log(diaDeLaSemana(1))
console.log(diaDeLaSemana(2))
console.log(diaDeLaSemana(3))
console.log(diaDeLaSemana(4))
console.log(diaDeLaSemana(5))
console.log(diaDeLaSemana(6))
console.log(diaDeLaSemana(7))
console.log(diaDeLaSemana(8))
console.log(diaDeLaSemana(-1))
console.log(diaDeLaSemana("hola"))
console.log(diaDeLaSemana(false))
console.log(diaDeLaSemana([]))
