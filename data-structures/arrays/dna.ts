/*
En un entorno de laboratorio, los investigadores están implementando una funcionalidad en línea destinada
 a identificar enfermedades genéticas en individuos.

Los genetistas normalmente realizan la tarea de buscar secuencias específicas dentro del
ADN de una persona para detectar mutaciones genéticas asociadas con varios trastornos.

Por ejemplo, pueden buscar secuencias de ADN distintivas que se sabe están correlacionadas con enfermedades genéticas.

Tu objetivo es desarrollar esta funcionalidad, en la cual recibirás una secuencia y deberás verificar su presencia dentro 
de la cadena de ADN proporcionada. La función debe devolver true si la secuencia se encuentra en la cadena de ADN y false en caso contrario.

EL ADN estará representado por una cadena de caracteres, donde cada carácter denota un
nucleótido (por ejemplo. "gtgggggtttatgectttagaacagcag").

De igual manera, la secuencia a buscar también estará representada como una cadena caracteres, representando
 una serie más corta de nucleótidos (por ejemplo, "ggt")

*/


let dnaString = 'gtgggggtttatgectttagaacagcag'
const sequence = 'ggttt'

function isAMatch (dnaString : string, sequence:string){

    for (let i=0; i <= dnaString.length - sequence.length ; i++){

    const dnaSlice = dnaString.slice(i,i + sequence.length)

      if (dnaSlice === sequence) {
        return true
      }  
    }
    return false
}

const result = isAMatch(dnaString, sequence)
console.log(result) 