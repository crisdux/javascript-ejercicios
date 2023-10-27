// la funcion reverse  debe dar la vuelta un arreglo 

const reverse = (arr) => {
    const reversed = [];
    // [1,2,3,4,5]
    for (let i = arr.length -1 ; i >= 0; i -= 1) { // i = 4
      reversed.push(arr[i]);
    }
  
    return reversed;
}

console.log(reverse([1, 2, 3, 4, 5]))

