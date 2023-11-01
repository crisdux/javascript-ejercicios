 //Este programa genera un número aleatorio entre el valor mínimo y máximo.

const generarRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generarRandom(1,10))
console.log(generarRandom(5,16))