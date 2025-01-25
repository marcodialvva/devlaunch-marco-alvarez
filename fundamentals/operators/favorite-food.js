/*
Escribe un programa simple en JavaScript que examine las preferencias culinarias de tres personas: 
María, Pepe y Malvern. El programa analiza tres condiciones:

¿Comparte Maria la misma comida favorita que tanto Pepe como Malvern?
¿La comida favorita de María coincide ya sea con la de Pepe ó con la de Malvern?
¿La preferencia de María es diferente tanto de la de Pepe como de la de Malvern?

Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones, ejemplo: 
Si la comida favorita de Maria es la pizza, la de Pepe es el pollo y el de malvern es el pescado.
Los resultados de estas comparaciones se muestran luego, ofreciendo información sobre las similitudes y diferencias en las
preferencias culinarias de los tres individuos.

La salida del programa será:
Does Maria share the same favorite food as both Pepe and Malvern? : false
Does Maria's favorite food match either Pepe's or Malvern's? : false 
Does Maria's preference differ from both Pepe's and Malvern's? : true

*/


const prompt = require (`prompt-sync`)()

const favoriteFoodMaria = prompt (`Enter Maria's favorite food: `)
const favoriteFoodPepe = prompt (`Enter Pepe's favorite food: `)
const favoriteFoodMalvern = prompt (`Enter Malvern's favorite food: `)

const isMariaAndPepeSameFavFood = favoriteFoodMaria === favoriteFoodPepe
const isMariaAndMalvernSameFavFood = favoriteFoodMaria === favoriteFoodMalvern

const allThreeMatch = isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood
const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
const noMatch = !isMariaAndPepeSameFavFood && !isMariaAndMalvernSameFavFood

console.log (`Does Maria share the same favorite food as both Pepe and Malvern?: ${allThreeMatch}`)
console.log (`Does Maria's favorite food match either Pepe's or Malvern's? : ${someMatch}`)
console.log (`Does Maria's preference differ from both Pepe's and Malvern's? : ${noMatch}`)
