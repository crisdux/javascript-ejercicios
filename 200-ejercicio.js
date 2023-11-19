// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino



const buyProducts = (money, products) => {
    let aux = Object.entries(products).map((item) => item[1]>=money ? [item[0],false] : [item[0], true])
    return Object.fromEntries(aux)
}

const products = { cookies: 60, chocolate: 110, soda: 120, }
const money = 115
console.log(buyProducts(money, products))