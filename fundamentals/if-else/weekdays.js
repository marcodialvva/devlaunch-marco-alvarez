/*
El programa solicita al usuario un número del 1 al 7 mediante prompt-sync.
Utiliza una declaración switch para mostrar el día de la semana correspondiente o
"Invalid day" si el número no es válido. Ejemplo: 3 muestra "Wednesday", muestra "Invalid day". Ideal para identificar días en programas simples.

*/

const prompt = require (`prompt-sync`)()
const number = parseFloat(prompt (`Ingrese un numero entre 1-7:`))

switch (number){
    case 1:
        console.log(`MONDAY`)
        break;
    case 2:
        console.log(`TUESDAY`)
        break;
    case 3:
        console.log(`WEDNESDAY`)
        break;
    case 4:
        console.log(`THURSDAY`)
         break;
    case 5:
        console.log(`FRIDAY`)
        break;
    case 6:
        console.log(`SATURDAY`)
         break;
    case 7:
        console.log(`SUNDAY`)
        break;
    default:
        console.error(`Invalid day`)
}

