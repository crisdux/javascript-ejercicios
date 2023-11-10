// Existen dos arrays, cada uno con 3 numeros,
// generar un nuevo array con la unión de ambos elementos,
//(Ejemplo: [1, 2, 3] unión [1,2,4] =[1, 1, 2, 2, 3, 4]

const unionArreglos = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

console.log(unionArreglos([1, 2, 3], [1, 2, 4]));
