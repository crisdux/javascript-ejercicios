// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

// Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

const distancia = (str1, str2) => {
    if(str1 === str2) return 0
    let lenStr1 = str1.length;
    let lenStr2 = str2.length;

    let resta =0;
    if(lenStr2>lenStr1){
        resta =lenStr2-lenStr1;
    }else if(lenStr1>lenStr2){
        resta = lenStr1 - lenStr2;
    }

    let diferencias = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            diferencias++;
        }
    }
    return diferencias +resta
}

// console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
console.log(distancia("doctora", "doctores")) //2
