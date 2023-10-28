// dado un objeto plano, convertirlo en un array anidado : 
//({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const makePairs  = (obj) => {
    return Object.entries(obj)
  }
  
  
  const makePairs2 = (obj) => {
    return Object.keys(obj).map((item) => [item, obj[item]])
  }
  
  console.log(makePairs({ a: 1, b: 2 }))
  console.log(makePairs2({ a: 1, b: 2, c: 3 }))