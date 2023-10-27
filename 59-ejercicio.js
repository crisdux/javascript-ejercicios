//verificar que un objeto es un objeto (de tipo objeto)
const isPlainObject = (obj) => {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj)
  }
  
  console.log(isPlainObject({a:1}))
  console.log(isPlainObject([]))
  console.log(isPlainObject(null))
  console.log(isPlainObject(undefined))
  console.log(isPlainObject(""))
  console.log(isPlainObject(0))
  console.log(isPlainObject(false))
  