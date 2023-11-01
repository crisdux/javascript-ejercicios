// dados los 3 lados de un triangulo estimar su area

const areaTriangulo = (a, b ,c) => {
    let s = (a + b + c)/ 2;
    let A = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return A;
}

console.log(areaTriangulo(5,6,7))