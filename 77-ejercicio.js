// Given a Quadratic Equation $$ ax^2+bx+c=0 $$

//We wish to find the solutions for x. We derive the quadratic formula from the equation above. $$ x = -b \pm \sqrt(b^2 - 4ac) / 2a $$

const ecuacionCuadratica = (a, b, c) => {
    let res1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let res2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    return [res1, res2];
}

console.log(ecuacionCuadratica(1,8,15))