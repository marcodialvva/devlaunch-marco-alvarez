/*
vowel-counter.ts

En este ejercicio, crearás una función que reciba una cadena de texto y cuente el número de vocales que contiene 
(tanto minúsculas como mayúsculas).

La función deberá iterar a través de cada carácter en la cadena dada y verificar si es una vocal (a, e, i, o, u). 
Para facilitar la verificación, puedes almacenar las vocales en un objeto.

La función debe devolver un objeto con el total de vocales encontradas y un desglose de cuántas veces aparece 
cada vocal en la cadena.

Ejemple de uso:
console.log (countVowels("Hello, World!")) // { total: 3, a: 0, e: 1, i: 0, 0:

*/
interface VowelCount {
  [key: string]: number
}

function countVowels(input: string) {
  let countA = 0
  let countE = 0
  let countI = 0
  let countO = 0
  let countU = 0

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase()
    if (char === 'a') {
      countA += 1
    } else if (char === 'e') {
      countE += 1
    } else if (char === 'i') {
      countI += 1
    } else if (char === 'o') {
      countO += 1
    } else if (char === 'u') {
      countU += 1
    }

  }
  const totalVowels = countA + countE + countI + countO + countU
  //return `TOTAL:${totalVowels}\na:${countA}\ne:${countE}\ni:${countI}\no:${countO}\nu:${countU} `

  const result: VowelCount = {
    total: totalVowels,
    a: countA,
    e: countE,
    i: countI,
    o: countO,
    u: countU,
  }
  return result
}
console.log(countVowels('MArcO DiegO AlvarEz ValVerDE'))