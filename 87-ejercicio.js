// Escriba una función que tome una cadena y devuelva la extensión del archivo, que es la cadena después del último punto (.) de la cadena. Si no hay ningún punto en la cadena, devuelve una cadena vacía. 


const extractFileExtension = (fileName) => {
    if(!fileName.includes(".")) return " ";
    return fileName.split(".").at(-1)
}

console.log(extractFileExtension("trabajo.exe")) //exe
console.log(extractFileExtension("87-ejercicio.js")) // js
console.log(extractFileExtension("hola.mundo.desde.cris.jpg")) // jpg
console.log(extractFileExtension("hola mundo")) // ""