// Cree una función que acepte el parámetro de tamaño en número y registre el patrón de estrella de triángulo rectángulo.

const triangulo = (n) => {
    for(let i=1; i<=5; i++){
        console.log("*".repeat(i))
    }
}

console.log(triangulo(5));
// *
// **
// ***
// ****
// *****