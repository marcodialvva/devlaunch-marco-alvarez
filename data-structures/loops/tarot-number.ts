/* 

En el Tarot, se usa la numerologia para entender mejor a una persona. Para encontrar su número de Tarot, observamos su fecha de nacimiento.
Al sumar los dígitos de su fecha de nacimiento, podemos encontrar un número especial que los representa.

Para empezar, pensemos en alguien nacido el 28 de noviembre de 1989.
Para descubrir el número, debenms seguir varios pasos:

Sumamos los números de su fecha de nacimiento: el día, el mes y el año.
Entonces, sumamos 28, 11 y 1989, Obteniendo 2028.

Ahora, descomponenos este númera grande en partes más pequeñas.
Así que, para 2028, sumanos 2 + 0 + 2 + 8, lo cual da 12.

Finalmente, simplificamos este número aún más. Para 12, sumamos 1 + 2, lo cual da 3
¡Y ese es el número especial que estamos buscando!

Recuerda utilizar bucles para reducir al máximo los calculos numericos realizados y validar que la fecha ingresada sea correcta,
no puedes recibir una fecha como 50/50/2020.

Aunque si podrias recibir una fecha como 12/12/10000 → 7, ya que podia ser que alquien del futuro esté usando tu codigo

*/

type Month = 1|2|3|4|5|6|7|8|9|10|11|12
type Day = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31
interface BirthDate {
    day: Day
    month: Month
    year: number
}

const calculateTarotNumber = (birthDate:BirthDate):number => {
    let _number: number = birthDate.day+birthDate.month+birthDate.year
    let suma = _number
   

    while (suma >= 10){
        suma = suma.toString()
        .split("")
        .reduce((acumulador,digito) => acumulador + Number(digito), 0)
        
    }

    console.log (_number)
    return suma

}

const date: BirthDate = {
    day:21,
    month:2,
    year:1999
}

console.log (calculateTarotNumber(date))
