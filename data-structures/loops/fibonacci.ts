/*
2. Fibonacci hasta N

Pide al usuario que ingrese un número entero positivo N. El programa debe imprimir la secuencia de Fibonacci hasta 
N utilizando un bucle. La secuencia de Fibonacci comienza con 0 y 1, y cada número siguiente es la suma de los dos anteriores.

*/

import PromptSync from "prompt-sync";

const prompt = PromptSync ()


function fibonacciNumberN (): void{

    const userFibonacciNumber: number = parseInt(prompt(`Enter your number: `))

    let n0 = 0
    let n1 = 1 

    if (!isNaN(userFibonacciNumber) && userFibonacciNumber > 0 && userFibonacciNumber > 1 ){

        console.log (`LOADING FIBONACCI SEQUENCE`)

        let a = 0
        let b = 1

        while (a <= userFibonacciNumber) {
            console.log (a);
            [a,b] = [b, a+b]

        }
    } else {
        console.log (`Invalid input`)
    }

}

fibonacciNumberN ()