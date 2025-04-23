/*
 Contar Caracteres en una Cadena

Enunciado: Escribe una función countCharacters(str: string): { [char: string]: number } que reciba una cadena de texto 
y devuelva un objeto donde cada clave sea un carácter de la cadena y el valor sea la cantidad de veces que aparece.
* Input: "hello"
* Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

*/
const stringChar = 'Lionel Andres Messi Cuccittini'
const countCharacters = (string: string )=>{
    const hash: {[key:string]: number} = {}

    for(let i=0; i<string.length; i++){
        const char = string[i]
        if (!hash[char]){
            hash [char] = 0
        }
        hash[char]++

    }
    console.log(hash)
}
const count = countCharacters('marco alvarez valverde')
console.log(count)