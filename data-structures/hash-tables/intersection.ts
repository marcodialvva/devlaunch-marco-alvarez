/*

Intersección de Dos Arreglos

Dado dos arreglos de números enteros, encuentra los elementos que están presentes en ambos arreglos.
 Retorna un arreglo con los elementos comunes, sin duplicados.

Especificaciones:

Implementa la función intersection(arr1: number[], arr2: number[]): number[] que retorne un arreglo de números que son comunes en ambos arreglos.
Input:

arr1: [1,2,2,1]
arr2: [2,6,7,3]
Output:
[2]
*/

const getArraysIntersection = (arr1: number[], arr2:number[]) => {
    const hash: {[key:number]: boolean} = {}
    const intersection: number[] = []

    for (let i = 0; i < arr1.length; i++) {
       
        const num = arr1[i]

        for (let j = 0; j < arr2.length; j++) {
            const num2 = arr2[j]
            if (num === num2) {
                hash[num] = true
                intersection.push(num)
            }
           
        }
        console.log(intersection)
    }
return hash
}

const arry1 = [1,2,2,1]
const arry2 = [2,6,7,4]

console.log (getArraysIntersection(arry1, arry2))