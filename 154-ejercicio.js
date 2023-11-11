// Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
// ALIMENTAR: +3 energía, +2 felicidad
// JUGAR: +2 felicidad, -2 energía, -1 limpieza
// DORMIR: +5 energía, +2 salud, -2 limpieza
// VACUNAR: +5 salud, -6 felicidad
// BAÑAR: +3 salud
// RETAR: -3 felicidad
// ACARICIAR: +4 felicidad
// Cuando el usuario selecciona una, debe mostrar el valor final de las variables.

const initTamagochi = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const tamagochi = {
  salud: initTamagochi(),
  felicidad: initTamagochi(),
  limpieza: initTamagochi(),
  energia: initTamagochi(),

  alimentar() {
    console.log(this.energia);
    this.energia += 2;
    console.log(this.energia);
    this.felicidad += 2;
    return {
      salud: this.salud,
      felicidad: this.felicidad,
      limpieza: this.limpieza,
      energia: this.energia,
    };
  },

  jugar() {
    this.felicidad += 2;
    this.energia -= 2;
    this.limpieza -= 1;
    return {
      salud: this.salud,
      felicidad: this.felicidad,
      limpieza: this.limpieza,
      energia: this.energia,
    };
  },

  dormir() {
    this.energia += 5;
    this.salud += 2;
    this.limpieza -= 2;
    return {
      salud: this.salud,
      felicidad: this.felicidad,
      limpieza: this.limpieza,
      energia: this.energia,
    };
  },

  vacunar() {
    this.salud += 5;
    this.felicidad -= 6;
    return {
      salud: this.salud,
      felicidad: this.felicidad,
      limpieza: this.limpieza,
      energia: this.energia,
    };
  },

  bañar() {
    this.salud += 3;
    return {
      salud: this.salud,
      felicidad: this.felicidad,
      limpieza: this.limpieza,
      energia: this.energia,
    };
  },

  retar() {
    this.felicidad -= 3;
    return {
      salud: this.salud,
      felicidad: this.felicidad,
      limpieza: this.limpieza,
      energia: this.energia,
    };
  },
  acariciar() {
    this.felicidad += 4;
    return {
      salud: this.salud,
      felicidad: this.felicidad,
      limpieza: this.limpieza,
      energia: this.energia,
    };
  },
};

console.log(tamagochi);
console.log(tamagochi.jugar());
console.log(tamagochi.retar());
console.log(tamagochi.alimentar());
