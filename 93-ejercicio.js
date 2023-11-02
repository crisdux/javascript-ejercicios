const productos = [
    { nombre: "Laptop", precio: 800, cantidad: 10 },
    { nombre: "Teléfono", precio: 300, cantidad: 20 },
    { nombre: "Tablet", precio: 200, cantidad: 15 },
  ];
  
  // incrementar el precio de los productos en el porcentaje dado
  const aumentarPrecios = (arrProductos, porcentaje) => {
    return arrProductos.map(({nombre, precio, cantidad}) => {
      return {
        nombre,
        cantidad,
        precio: precio + (precio * porcentaje) / 100
      }
    })
  }
  console.log(aumentarPrecios(productos, 10))
  
  // filtrar por precio dado, menor o igual al precio dado
  
  const filtrarPorPrecio = (arrProductos, precio) => {
    return arrProductos.filter((producto) => producto.precio <=precio)
  }
  
  console.log(filtrarPorPrecio(productos, 250))
  
  
  // calcular el precio total de todo el inventario
  
  const calcularValorTotal = (arrProductos) => {
    return arrProductos.reduce((acc, current) => (current.cantidad * current.precio) + acc,0)
  }
  console.log(calcularValorTotal(productos))