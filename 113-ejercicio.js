// Escribe una función en JavaScript que tome un array de cadenas de texto como entrada. La función debe ordenar las cadenas de texto de manera ascendente según la longitud de las palabras.

const palabras = ["manzana", "pera", "kiwi", "limon", "uva", "melón", "banana"];

const ordenarPorLongitud = (arr) => {
  return arr.sort((a, b) => {
    if (a.length < b.length) return 1;
    if (a.length > b.length) return -1;
    return 0;
  });
};

console.log(ordenarPorLongitud(palabras));
