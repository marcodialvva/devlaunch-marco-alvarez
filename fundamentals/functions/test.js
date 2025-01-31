/*

En Respuestal S.A.  hay proceso donde cada trabajador debe registrar las horas de entrada y salida diariamente. De esta forma, al final de cada dia, 
su empleador sabrá cuánto tiene que pagarles por sus horas trabajadas.

Pero, si una persona trabajó más de ocho horas, se le debe pagar un costo extra por las horas adicionales, que es igual a 1.5 veces el monto de su tarifa por hora.


Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida, imprima el monto total de dinero que ese empleado recibió ese día.

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00
 Respuesta  $95


*/

const prompt = require(`prompt-sync`)()
const WORKED_DAY = 8
const EXTRA_RATE = 1.5



function main() {
  const hourlyRate = parseFloat (prompt (`HOURLY RATE: $ `))
  const starTime = prompt(`START AT: `)
  const finishTime = prompt(`END AT: `)
  const payment = paycheck(starTime, finishTime, hourlyRate)

  return console.log(`Tarifa diaria $10
Hora de entrada:${starTime}  
Hora de salida: ${finishTime} 
Payment :$${payment} `)
  
}

main()

function paycheck(starTime, finishTime, hourlyRate) {
  const [startHour] = starTime.split (':')
  const [finishHour] = finishTime.split (':') 
  
  const workedHours = finishHour - startHour
  const extraTime = workedHours - WORKED_DAY
  const regularPay = (workedHours-extraTime) * hourlyRate
  const extraRate = hourlyRate * EXTRA_RATE
  const extrapayment = extraTime * extraRate

  if (workedHours === 0) {
    return 0
  }
  else if (workedHours <= WORKED_DAY) {
    return regularPay
  } else if (workedHours > WORKED_DAY ) {
return regularPay+extrapayment
  }

}