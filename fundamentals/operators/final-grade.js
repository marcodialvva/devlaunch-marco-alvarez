/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una escuela.
 Como parte de este desafío, primero configuras el entorno para recibir entradas del usuario, permitiendo que ingresen tres notas.
Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateado con máximo dos decimales, para asegurar una
lectura clara.
Si el usuario ingresa las calificaciones 80, 70 y 90, la salida será: 80

*/

const prompt = require (`prompt-sync`)()

const gradeNumber1 = parseFloat(prompt (`Enter first note: `))
const gradeNumber2 = parseFloat(prompt (`Enter second note: `))
const gradeNumber3 = parseFloat(prompt (`Enter third note: `))

const Total_Grades = 3
const MAX_DECIMALS = 3

const grade = (gradeNumber1 + gradeNumber2 + gradeNumber3)/ Total_Grades

const fGrade = parseFloat(grade.toFixed(MAX_DECIMALS))


console.log(`Grade #1: ${gradeNumber1}`)
console.log(`Grade #2: ${gradeNumber2}`)
console.log(`Grade #3: ${gradeNumber3}`)


console.log(`FINAL GRADE: ${fGrade}`)


