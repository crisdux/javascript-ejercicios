// escribir la funcion fill con la longitud y el valor que debe tener el arreglo resultate
// arraySize = 3, value = "a" => ["a", "a", "a"]

const fill = (arraySize, value) => {
    return Array(arraySize).fill(value);
};

console.log(fill(3, "a"));
console.log(fill(5, "k"));