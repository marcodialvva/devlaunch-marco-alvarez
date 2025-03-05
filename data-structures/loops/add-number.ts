/*

Solicita al usuario que ingrese un número entero. El programa debe calcular la suma de todos los dígitos de ese número utilizando un bucle. 
Por ejemplo, si el usuario ingresa 123, el programa debe devolver 6 (1 + 2 + 3).

*/

import PromptSync from "prompt-sync";

const prompt = PromptSync () 


function userAddNumber (): void{

let userNumberToAdd = parseInt(prompt( `Enter your number:  `))

if(!isNaN(userNumberToAdd)){
   
    const numbers: number[] = userNumberToAdd.toString().split("").map(Number)
    let suma = 0    

    for (let num of numbers ){
   suma-= num

 // for (let i=1; i<numbers.length; i++){
   // suma += numbers[i]
  }
   

console.log (suma)
}
}

userAddNumber()