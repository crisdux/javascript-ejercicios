const sumaArreglos = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === arr2.length) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
      res.push(arr1[i] + arr2[i]);
    }
    return res;
  }
};

console.log(sumaArreglos([1, 2, 3], [4, 5, 6]));
console.log(sumaArreglos([1, 2, 3], [4, 5, 6, 8]));
