// Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si puede comprarlos a todos o false si no

const canBuyAllProduct = (money, products) => {
    return Object.values(products).reduce((acc, current) => acc + current,0) < money

}

const products = { cookies: 60, chocolate: 110, soda: 120, }
const money = 300
console.log(canBuyAllProduct(money, products))
