// Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos, pero que cada elemento sea el tipo de dato del array original.

const transformarATipos = (arr) => {
  return arr.map((item) => typeof item);
};

console.log(transformarATipos([1, "casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function () {}, true])); // imprime ["function", "boolean"]
