/*
La Universidad de Harvard se ha dado cuenta de que manejar manualmente los criterios de becas no es eficiente. 
Ahora buscan una forma mejor de evaluar las numerosas solicitudes de estudiantes que reciben.

El nuevo sistema que planean implementar decidirá eficientemente quién califica para las becas.
Normalmente, los estudiantes deben ayudar en clases de laboratorio y aprobar cuatro materias, con sus 
calificaciones promediadas para verificar la elegibilidad.

Las reglas de elegibilidad son estrictas:

-Los estudiantes necesitan tener un promedio de calificaciones de 9 o más en todas las materias, sin ninguna calificación 
individual menor a 8, independientemente de cómo les fue como asistentes de laboratorio.

-Alternativamente, si tienen un promedio de 8.5 o más, aún pueden calificar si obtuvieron una calificación 
de "A" o "B" como asistentes de laboratorio.

Sin embargo, si obtuvieron una calificación de "C" como asistentes de laboratorio, no calificarán para la beca, 
incluso si sus calificaciones generales son buenas.

*/


const prompt = require(`prompt-sync`)()
const BASE_AVERAGE = 85
const BASE_GRADE = 80 
const REJECT_ASSISTANT_GRADE = `C`
const AMOUNT_OF_GRADES = 4

function main() {
    const assistantGrade = prompt('Ingrese la nota de asistente (A,B,C)').toUpperCase()
    const grade1 = parseFloat(prompt(`Ingrese la nota 1: `))
    const grade2 = parseFloat(prompt(`Ingrese la nota 2: `))
    const grade3 = parseFloat(prompt(`Ingrese la nota 3: `))
    const grade4 = parseFloat(prompt(`Ingrese la nota 4: `))
    const average = ( grade1 + grade2 + grade3 + grade4)/ AMOUNT_OF_GRADES

    const isElegible = validationScholarship (grade1, grade2, grade3, grade4, assistantGrade)

    if (isElegible === false) console.log (`NO ES ELEGIBLE PARA BECA`);
    else { console.log(`FELICIDADES POR SU BECA`)
    }
    return console.log(`Su nota promedio es: ${average}
Su nota asistente es: ${assistantGrade}`)

}

main ()

function validationScholarship (grade1, grade2, grade3, grade4, assistantGrade) {
    const average = (grade1 + grade2 + grade3 + grade4)/ AMOUNT_OF_GRADES

if (assistantGrade === REJECT_ASSISTANT_GRADE) return false;
else if ( average < BASE_AVERAGE ) return false;
else if ( grade1 < BASE_GRADE || grade2 < BASE_GRADE || grade3 < BASE_GRADE || grade4 < BASE_GRADE) return false;
else {
    return true
}

}
