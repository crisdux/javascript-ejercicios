//Dadas dos cadenas s1 y s2, escriba una función para que devuelva verdadero si s2 contiene s1. De lo contrario, invierta s2 y verifique si s2 contiene s1. Si es así, devuelve verdadero. Si no, devuelve falso.

const vertificaString = (s1, s2) => {
    if(s2.includes(s1)){
        return true;
    }else if(s2.split("").reverse().join("").includes(s1)){
        return true;
    }else{
        return false;
    }
}

console.log(vertificaString("cs", "cs")) //true
console.log(vertificaString("cs", "cse")) //true
console.log(vertificaString("cs", "ces")) //false
console.log(vertificaString("cs", "disco")) //true
console.log(vertificaString("cs", "disoc")) //false
