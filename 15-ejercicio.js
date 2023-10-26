// Esta función recibe por parámetro un número.
// Debe retornar true si el entero inicia con 9 y false en otro caso.
// Tu código:
function empiezaConNueve(num) {
    if(typeof num !== "number") return "El parametro debe ser un numero";
    const numeroAString = String(num)
    const primerDigito = Number(numeroAString[0]);
    return primerDigito === 9
  }
  
  console.log(empiezaConNueve(965)) 
  console.log(empiezaConNueve(65)) 
  console.log(empiezaConNueve(999)) 
  console.log(empiezaConNueve(0)) 
  console.log(empiezaConNueve(9)) 
  console.log(empiezaConNueve("999"))
  console.log(empiezaConNueve([]))
  console.log(empiezaConNueve(true))
  