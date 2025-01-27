/*
Escribe un programa que use console. log para imprimir todos los números del 1 al 100, con dos excepciones. 
Para los números divisibles por 3, imprime "Fizz(3)" en lugar del número, y para los números divisibles por 5 (y no por 3), imprime "Buzz(5)"
 en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz
" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o
"Buzz" para los números que son divisibles solo por uno de esos).
Esto es en realidad una pregunta de entrevista que se ha afirmado que elimina a un porcentaje significativo de candidatos a programadores. 
Entonces, si lo resolviste, tu valor en el mercado laboral acaba de aumentar.)

*/

let numero = 0
while (numero <= 99) {
    numero = numero + 1
if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`fizzbuzz`)
} else if (numero % 5 === 0) {
    console.log(`Buzz (5)`)
} else if  (numero % 3 === 0){
    console.log(`Fizz(3)`)}
 else (console.log(numero))
}
