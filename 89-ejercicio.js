// veriricar si un numero es palindromo pero sin convetirlo a string

const isPalindrome = (number) => {
    const arr = []
    while(number > 0){
        let lastDigit = number % 10;
        arr.push(lastDigit);
        number = Math.floor(number / 10);
    }
    return arr.join('') === arr.reverse().join('')
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(12)); // false
