/*
Voy al supermercado GreenCenter para hacer mis compras habituales y planeo comprar manzanas y narantas.
Entrede 5150 en etectiveue no hay plátanos ni uvas, así que cambio un poc Veo que 3 cajeros están trabajando, 
así que me prepara para pagar.
Mis cosas cuestan $100 en total.
Entrede 5150 en etective y recibe $50 de cambio.

*/

const supermarket = 'Green Center' 
let shoppingList = `Manzanas y Naranjas`

let thingNotFound1 = 'Platano'
let thingNotFound2 = 'Uvas'

const areBananasAvailable = false
const areGrapesAvailable = false

let totalCost = 100
let totalPay = 150

let change = totalPay - totalCost

console.log(supermarket)
console.log(`Shopping List:${shoppingList}`)
console.log(`Things out of stock:${thingNotFound1} and ${thingNotFound2} `)
console.log(`Total Cost:$ ${totalCost}`)
console.log(`Total Pay:$${totalPay}`)
console.log(`Total Change:$${change}`)

console.log(`THANK YOU FOR YOUR PURCHASE`)


