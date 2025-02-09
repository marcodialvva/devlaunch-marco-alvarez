/*
En este escenario, se te proporcionarán varias fracciones, y tu tarea será realizar 
diversas operaciones con ellas, tales como suma, resta, multiplicación y división.

El objetivo es obtener el numerador y el denominador resultantes de estas operaciones.
Para lograrlo, deberás definir dos atributos: el numerador y el denominador.

Además, implementarás métodos correspondientes para cada operación, devolviendo un objeto 
resultante con el numerador y denominador calculados.

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte del objeto
como incluidos como parte de su funcional dentro del objeto mismo.


const fraction1 - createFraction (3, 4)
const fraction2 - createFraction (2, 3)

add (fraction1, fraction2)

const fraction3 - createFractionWithFunctions (3, 4)
const fraction4 - createFraction (2, 3)

fraction3. add (fraction4)

*/


const createFraction = (numerator, denominator) => {
    return {
        numerator,
        denominator
    }
}

const add = (f1, f2) => {
    const newNum = (f1.numerator * f2.denominator) + (f2.numerator * f1.denominator)
    const newDen = f1.denominator * f2.denominator

    return createFraction(newNum, newDen)
}

const sub = (f1, f2) => {
    const newNum = (f1.numerator * f2.denominator) - (f2.numerator * f1.denominator)
    const newDen = f1.denominator * f2.denominator

    return createFraction(newNum, newDen)
}

const multi = (f1, f2) => {
    const newNum = f1.numerator * f2.numerator
    const newDen = f1.denominator * f2.denominator

    return createFraction(newNum, newDen)
}

const div = (f1, f2) => {
    const newNum = f1.numerator * f2.denominator
    const newDen = f1.denominator * f2.numerator

    return createFraction(newNum, newDen)
}

const createFractionWithFunctions = (numerador, denominador) => {
    const f1 = createFraction(numerador, denominador)
    return {
        ...f1,

        add: (f2) => add(f1, f2),
        sub: (f2) => sub(f1, f2), 
        multi: (f2) => multi(f1, f2),
        div: (f2) => div(f1, f2),

    }

}

const f1 = createFraction(3, 4)
const f2 = createFraction(2, 3)

console.log(add(f1, f2))
console.log(sub(f1, f2))
console.log(multi(f1, f2))
console.log(div(f1, f2))