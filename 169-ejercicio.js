// Crear un programa que permita ingresar dos listas de valores separados por espacio y muestre en un mensaje si las listas son iguales o no(mismos valores en mismo orden).

const arrIguales = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
// Ingrese valores de lista 1: 10 25 6 33 48 105
// Ingrese valores de lista 2: 10 24 6 33 48 105

// Las listas no son iguales

console.log(arrIguales([10, 25, 6, 33, 48, 105], [10, 24, 6, 33, 48, 105]));
console.log(arrIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]));
