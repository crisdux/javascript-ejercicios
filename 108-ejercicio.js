// GENERAR UNA CONTRASEÑA ALEATORIA DE UNA LONGITUD DADA

// generar un numero aleatorio entre 0 y la longitud de la lista
const getRandom = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

const generarContrasena = (longitud) => {
  const abcLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const abcUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    "-",
    "_",
    "=",
    "?",
    ".",
    ",",
    ";",
    ":",
    "/",
    "|",
    "~",
    "^",
    "<",
    ">",
    "{",
    "}",
    "[",
    "]",
  ];
  const total = [...abcLower, ...abcUpper, ...numbers, ...symbols];

  let caraacter = "";
  for(let i = 0; i<longitud; i++){
    caraacter += total[getRandom(total)]
  }
  return caraacter
};

console.log(generarContrasena(10));
console.log(generarContrasena(20));



