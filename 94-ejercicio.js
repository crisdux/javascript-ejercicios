// dado el objeto de inventario, calcular el total de las ventas

const inventario = {
    "Producto A": 150,
    "Producto B": 200,
    "Producto C": 120,
    "Producto D": 250,
    // ... más productos ...
  };
  
  const calcularTotalInventario = (obj) => {
    return Object.values(obj).reduce((acc, costo) => acc + costo,0)
  }
  
  console.log(calcularTotalInventario(inventario))