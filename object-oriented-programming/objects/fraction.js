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


function Fraction(num, den) {
  this.num = num,
    this.den = den


  this.multi = (toFraction) => {
    return new Fraction (this.num * toFraction.num, this.den * toFraction.den)
  }

  this.div = (toFraction) => {
    return new Fraction (this.num * toFraction.den, this.den* toFraction.num)
  }

  this.sum = function (toFraction){
    function mcd(a, b) {
      return b === 0 ? a : mcd(b, a % b);
    }
    
    function mcm(a, b) {
      return (a * b) / mcd(a, b);
    }

    const commonDen = mcm(this.den, toFraction.den);
    const newNum =
      (this.num * (commonDen / this.den)) +
      (toFraction.num * (commonDen / toFraction.den));

    return new Fraction(newNum, commonDen);
  };

  this.rest = function (toFraction){
    function mcd(a, b) {
      return b === 0 ? a : mcd(b, a % b);
    }
    
    function mcm(a, b) {
      return (a * b) / mcd(a, b);
    }

    const commonDen = mcm(this.den, toFraction.den);
    const newNum =
      (this.num * (commonDen / this.den)) -
      (toFraction.num * (commonDen / toFraction.den));

    return new Fraction(newNum, commonDen);
  };

}

const frac1 = new Fraction(3, 4)
const frac2 = new Fraction(2, 3)

console.log (frac1.sum(frac2))
console.log (frac1.rest(frac2))
console.log (frac1.multi(frac2))
console.log (frac1.div(frac2))



