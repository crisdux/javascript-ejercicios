// Los parámetros de búsqueda en una URL son aquellos que vienen después del signo ? y se escriben como parametro=valor, separados por el signo &. Crear una función que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.

const parseQueryParams = (url) => {
    const myUrl = new URL(url);
    let res = {}
    myUrl.searchParams.forEach((value, key) => {
        res[key] = value
    })
    return res;
}

console.log(parseQueryParams
("http://www.exercises.com?keyword=objects&language=javascript&level=intermediate"))
// returns { keyword: "objects", language: "javascript", level: "intermediate }