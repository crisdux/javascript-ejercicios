// dado el arr products obtener el promedio precios por categoria que sean mayores a 50
const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];
  
  
  
  const productsByCategory = (arr) => {
    return Object.groupBy(arr, ({category}) => category)
  }
  
  console.log(productsByCategory(products))
  
  const avgPriceByCategory = (obj) => {
    return Object.keys(obj).map((category) => {
      const prices = obj[category];
      const average = prices.reduce((acc, current) => acc + current.price, 0) / prices.length;
      return { category, average };
    }).filter((item) => item.average > 50)
  }
  
  console.log(avgPriceByCategory(productsByCategory(products)))
  