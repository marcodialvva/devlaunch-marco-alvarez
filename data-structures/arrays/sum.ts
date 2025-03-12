/*

Crea un programa en que sume los números en las posiciones correspondientes de dos arreglos.
Esto significa sumar el número en el indice 0 del primer arreglo con el número en el indice 0
del segundo arreglo, y así sucesivamente.


Asegúrate de que el programa pueda manejar arreglos de diferentes longitudes y sume los números correctamente.
Además, incluye manejo de errores para abordar situaciones como arreglos vacios
o arreglos con valores no numéricos.
Eiemplo:
[1, 0, 2, 3, 4] + [3, 5, 6, 7, 8, 13, 9] = [4, 5, 8, 10, 12, 13, 9]


*/

function arraySum_ (array1 : (number|string| null
)[], array2:(number|string|null)[]){


    const maxLength: number = Math.max(array1.length, array2.length)

    const arrResults: (number|string)[] = [] 

    for (let i = 0; i<maxLength; i++) {

        const b = array2[i]
        const a = array1[i]
        
        if ( typeof a === 'number' && typeof b === 'number'){
           arrResults.push (a + b)
        } else if (typeof a === 'number' && typeof b !== 'number'){
            arrResults.push (a)
        } else if (typeof a !== 'number' && typeof b === 'number'){
            arrResults.push (b)
        } else { 
            arrResults.push (NaN)
        }
        
    }
    return arrResults

}
const arr1:(number|string| null)[] = [] 
const arr2: (number|string| null)[] = [3, 5, 6, 'e']
const sumArray = (arraySum_(arr1,arr2))
console.log(sumArray)

