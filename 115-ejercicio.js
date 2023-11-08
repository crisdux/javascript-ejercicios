// hacer una funcion que reciba por paremetro un objeto y un array de strings que representan las keys del objeto
// la funcion debe retornar el objeto sin los strings que se encuentren en el array

const persona = {
    nombre: "Cris",
    edad:27,
    pais:"Bolivia",
    profesion:"Desarrollador web"
};

const eliminarItemObj = (obj, keys) => {
    const newObj = {...obj};
    keys.forEach((key) => {
        delete newObj[key];
    },{})
    return newObj;
}

console.log(eliminarItemObj(persona, ["pais", "edad", "test"]));