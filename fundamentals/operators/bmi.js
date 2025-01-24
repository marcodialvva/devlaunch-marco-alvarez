/*
Escribe un programa sencillo en JavaScript que calcule y muestre el Índice de Masa Corporal (IMC)
de un usuario. El programa debe solicitar al usuario su nombre, altura en metros y peso en kilogramos.
Después de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre
y el valor de su IMC.
Calcula el IMC utilizando la fórmula:
IMC = weight / height^2
Nombre: John
Altura: 1.75
Peso: 70
La salida será: Hi John, your BMI is ~22.86

*/

const prompt = require (`prompt-sync`)()

const name = prompt (`Enter your name: `)
const height = parseFloat(prompt (`Enter you high (in meters): `))
const weight = parseFloat(prompt (`Enter your weigth (kg): `))

const MAX_DECIMALS = 2


const imc = weight / Math.pow (height, 2)
const roundedImc = parseFloat(imc.toFixed(MAX_DECIMALS))

console.log (`Hi ${name}, your BMI: ${roundedImc}`)

