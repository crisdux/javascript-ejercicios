// escribir una fn cleanNames que limpie las cadenas del arreglo

const cleanNames = (arr) => {
    if(!Array.isArray(arr)) return "De sebe pasar un arreglo"
    if(arr.some((name) => typeof name !== "string")) return "Todos los elementos deben ser strings"
    return arr.map((name) => name.trim())
}

console.log(cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]))
console.log(cleanNames([1,2,3]))
console.log(cleanNames(1))