/*
Crea un programa en JavaScript que calcule la factura total de una persona en un hotel, 
donde cada habitación tiene un precio de $100 por noche, aprovechando una oferta promocional
que incluye un descuento del 5%.

El programa debe solicitar al huésped el número de noches que pasó en el hotel para calcular
la factura final.

Si el usuario ingresa que se quedó 5 noches, la salida será: $475.00
*/


const prompt = require (`prompt-sync`)()

const nightsHosted = parseInt(prompt(`How many nights will you be staying at the hotel with us?:-> `))

const hotelName = `DIALVA HOTEL`

const Price_Per_Night = 100
const currency = `$`
const promotionalOffer = 0.05

const subtotal = nightsHosted * Price_Per_Night
const offerDiscount = subtotal * promotionalOffer

const totalBill = subtotal - offerDiscount

console.log(hotelName)
console.log (`Price per night:${currency}${Price_Per_Night}`)

console.log(`Nights we had the pleasure of hosting you: ${nightsHosted}`)

console.log(`Total amount before discount: ${currency}${subtotal}`)
console.log(`Total discount: ${currency}${offerDiscount}`)


console.log(`Total Bill: ${currency}${totalBill}`)

