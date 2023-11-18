/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, 
 * devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 *
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */

const removeWords = (str, words) => {
    
    let res = str.split(" ");
    res = res.filter((item) => !words.includes(item));
    return res.join(" ");


}

console.log(removeWords("This is a really bad test", ["really", "bad"]))