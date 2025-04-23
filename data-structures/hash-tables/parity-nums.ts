/*
Ejercicio 2: Agrupar Números por Paridad
Enunciado: Crea una función groupByParity(numbers: number[]) que reciba un arreglo de números
 y devuelva un objeto con dos propiedades: even (un arreglo con los números pares) y odd (un arreglo con los números impares).


 Input: [1, 2, 3, 4, 5]
Output: { even: [2, 4], odd: [1, 3, 5] }

*/

const aNums = [ 34,23,17,35,44,68,99,115, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const groupByParity = (number: number[])=>{
    const hash: {[key:string]: number[]} = {}

    aNums.forEach((num) =>{

        const isEven = num % 2 === 0
        const key = isEven ? 'even' : 'odd'

      if (!hash[key]){
            hash[key] = []
      }  hash[key].push(num)

      console.log(hash)

    } )
}

const group = groupByParity(aNums)
console.log(group)