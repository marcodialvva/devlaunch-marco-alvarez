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

interface Fractions {
  num:number
  den:number
  multi:(toFraction: Fractions) => Fractions
  div:(toFraction: Fractions) => Fractions
  sum:(toFraction: Fractions) => Fractions
  rest:(toFraction: Fractions) => Fractions

}


function Fraction(num: number, den: number): Fractions {
 const fraction: Fractions ={num, den, multi: () => fraction, div: () => fraction, sum: () => fraction, rest: () => fraction }


  fraction.multi = (toFraction:Fractions):Fractions => {
    return Fraction (fraction.num * toFraction.num, fraction.den * toFraction.den)
  }

  this.div = (toFraction: Fractions) => {
    return Fraction (fraction.num * toFraction.den, fraction.den* toFraction.num)
  }

  fraction.sum = function (toFraction:Fractions): Fractions {
    function mcd(a:number, b:number): number {
      return b === 0 ? a : mcd(b, a % b);
    }
    
    function mcm(a:number, b:number):number {
      return (a * b) / mcd(a, b);
    }

    const commonDen = mcm(fraction.den, toFraction.den);
    const newNum =
      (fraction.num * (commonDen / fraction.den)) +
      (toFraction.num * (commonDen / toFraction.den));

    return Fraction(newNum, commonDen);
  };

  this.rest = function (toFraction:Fractions): Fractions{
    function mcd(a:number, b:number):number {
      return b === 0 ? a : mcd(b, a % b);
    }
    
    function mcm(a:number, b:number): number {
      return (a * b) / mcd(a, b);
    }

    const commonDen = mcm(this.den, toFraction.den);
    const newNum =
      (fraction.num * (commonDen / fraction.den)) -
      (toFraction.num * (commonDen / toFraction.den));

    return Fraction(newNum, commonDen);
  };

  return fraction
}

const frac1 = Fraction(3, 4)
const frac2 = Fraction(2, 3)

console.log (frac1.sum(frac2))
console.log (frac1.rest(frac2))
console.log (frac1.multi(frac2))
console.log (frac1.div(frac2))



