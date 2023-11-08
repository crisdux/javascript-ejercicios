// hacer una funcion que reciba como parametro un objeto y un arreglo de strings
// la funcion debe regresar los valores del objeto indicados en el arreglo de strings

const persona = {
  nombre: "cris",
  edad: 15,
  altura: 180,
  peso: 80,
};

const selectObj = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
      acc[key] = obj[key];
      return acc;
    }
    return acc;
  }, {});
};

console.log(selectObj(persona, ["nombre", "peso", "test"]));
