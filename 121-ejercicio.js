// contar la cantidad de digitos de un numero sin convertir su tipo de dato 

let n = 578;
let contador = 1;
while (n > 0) {
    n = Math.trunc(n / 10);
    if (n > 0) {
        contador++;
    }
}
console.log(contador);
