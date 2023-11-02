const ventas = [
    { fecha: new Date ("2023-01-05"), monto: 150 },
    { fecha: new Date ("2023-02-15"), monto: 200 },
    { fecha: new Date ("2023-01-22"), monto: 180 },
    { fecha: new Date ("2023-03-10"), monto: 250 },
  ];
  
  const getArrayVentasTransform = (arrVentas) => {
    return arrVentas.map(({fecha, monto}) => {
      return {
        fecha: fecha.toLocaleString('es-ES', { month: 'long' }),
        monto
      }
    })
  }
  
  const agruparPorMeses = (arrVentas) => {
    const arrFechasTransform = getArrayVentasTransform(arrVentas)
    const agruparPorFecha = Object.groupBy(arrFechasTransform, ({fecha}) => fecha)
    return agruparPorFecha
  }
  
  const sumaTotalesPorMes = (obj) => {
    return Object.keys(obj).map((mes) => {
      const ventas = obj[mes]
      const suma = ventas.reduce((acc, current) => acc + current.monto, 0)
      return {mes:suma}
    })
  }
  
  console.log(sumaTotalesPorMes(agruparPorMeses(ventas)))