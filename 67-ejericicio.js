// Escriba un programa que imprima los números del 1 al 100. Pero para los múltiplos de tres imprima "Fizz" 
//en lugar del número y para los múltiplos de cinco imprima "Buzz".Para números que sean 
//múltiplos de tres y cinco, imprima "FizzBuzz".

for(let i = 1; i<= 100; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz")
    }else if(i % 3 === 0){
      console.log("Fizz")
    }else if(i%5=== 0){
      console.log("Buzz")
    }else{
      console.log(i)
    }
  }
  
  