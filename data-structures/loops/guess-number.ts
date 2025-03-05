/*
Pediremos al usuario a traves de la terminal un número entre 1-100.

La finalidad es que el usuario llegue a  adivinar el número escogido por el programa.

Una vez que el usuario empiece a adivinar el número, el programa le tiene que decir:

-Si es el número
-Si es un número mayor o menor, hasta que lo adivine.


*/

import PromptSync from "prompt-sync"

const prompt = PromptSync()

const MIN_NUMBER = 1
const MAX_NUMBER = 100


const chooseNumber: number = Math.floor(Math.random()* MAX_NUMBER) + MIN_NUMBER

function guessNumber ():void {
    const attempt_:number = parseInt(prompt(`Guess the number I chose for you:  `))

    console.log (chooseNumber)

if (chooseNumber === attempt_){
    console.log (`ADIVINASTE 🏆🏆🏆`) 

} else {console.log(`ESE NO ES, VAMOS DE NUEVO`)}

    while (chooseNumber !== attempt_){

    const attempt_:number = parseInt(prompt(`Guess the number I chose for you:  `))

    if (chooseNumber > attempt_) {
        console.log (`Te doy una pista, tu número ES MENOR que el mio`)

    } else if (chooseNumber < attempt_){ 
        console.log (`Te doy una pista, tu número ES MAYOR que el mio`)
    } 
    else if (chooseNumber === attempt_) {
        console.log (`ADIVINASTE 🏆🏆🏆`)
        break
    } else {console.log (`Your input is not right, PLEASE TRIE AGAIN`)}
}

}

guessNumber ()
