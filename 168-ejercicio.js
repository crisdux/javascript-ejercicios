// Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales menos los mosquitos y alacranes.

const exterminador = (arr) => {
    return arr.filter((item) => item !== "🦟" && item !== "🦂")
}

// Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// Animales sin insectos: [🐱, 🐭, 🐶, 🦊]

console.log(exterminador(["🐱", "🐭", "🐶", "🦟", "🦊", "🦂"]))