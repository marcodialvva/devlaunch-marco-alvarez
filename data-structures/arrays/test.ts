


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

