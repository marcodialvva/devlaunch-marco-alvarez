/*

Un triángulo, una forma geométrica fundamental, es un polígono caracterizado por tener tres lados y tres vértices. 
De acuerdo con el teorema de la desigualdad del triángulo, en cualquier triángulo válido, 
la suma de las longitudes de dos lados cualesquiera debe ser mayor que la longitud del tercer lado.

Tu tarea es crear un objeto que represente un triángulo.

Este objeto debe tener tres propiedades, cada una correspondiente a uno de sus lados.

Además, se requiere una función para validar si los lados dados cumplen con el teorema de la desigualdad del triángulo.
Por ejemplo, considera un triángulo con longitudes de lados: a - 7, b = 10, y c = 5.

Para determinar si estos lados forman un triángulo válido, evaluamos si la suma de cada par de lados 
es mayor que la longitud del lado restante.

En este caso, verificamos si (b + c) › a, (a + c) › b, y (a + b) > c.
Si se cumplen las tres condiciones, entonces los lados efectivamente forman un triángulo.

*/



const prompt = require(`prompt-sync`)()


function main (){
const side1 = parseFloat(prompt(`SIDE 1: `))
const side2 = parseFloat(prompt(`SIDE 2: `))
const side3 = parseFloat(prompt(`SIDE 3: `))
const triangle = {
    side1: side1,
    side2: side2,
    side3: side3,
}

const isAtriangle = validation (side1,side2,side3)

if (isAtriangle) {
    return console.log(Object.values(triangle))
} else {
    return console.log (`Estas medidas no corresponden a las de un triangulo`)
}

}


main ()

function validation (side1, side2, side3) {
    if ( (side1+side2)> side3 && (side1+side3)>side2 && (side2+side3)>side1)
        return true 
    else {
        return false
    }
}




















