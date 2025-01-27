/*
Descripción del Código:
Entrada de Fecha de Nacimiento: Se solicita al usuario que ingrese su fecha de nacimiento en el
formato YYYY/MM/DD.
Cálculo de la Edad: 

Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando el año de nacimiento del año actual. 
También se verifica si ya ha pasado el cumpleaños del año actual, para ajustar la edad es necesario.

Verificación de Edad: 

Se utiliza un if-else para determinar si la persona cumple con la edad legal para beber (18 años o más) 
y se imprime el mensaje correspondiente.
Este programa permite que el proceso de verificación de edad sea automático y preciso, asegurando que solo los mayores de edad puedan ingresar al bar. 

const birthdate = new Date(birthdate)
const today = new Date

const age = today.getFullYear() - birthday.getFullYear()


*/


const prompt = require (`prompt-sync`)()

const birthdate = prompt(`What is your birthdate (use this format YYYY/MM/DD): `)


const today = new Date()
const birthday = new Date(birthdate)

let age = today.getFullYear() - birthday.getFullYear()
const birthdayPassed = (
    today.getMonth() > birthday.getMonth() ||
    (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
    )
)

if (!birthdayPassed) {
    age--
}
     
console.log(`Su edad es de:${age} años`)

if (age >= 18){
    console.log(`BIENVENIDO AL BAR DE MOE`)
} else { 
    console.log(`ENTRADA DENEGADA, ERES MENOR DE EDAD`)
}










