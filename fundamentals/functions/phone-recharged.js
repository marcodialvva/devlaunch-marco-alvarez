/*

El proveedor principal de servicios de telefonía móvil en la ciudad está introduciendo una oferta promocional basada 
tanto en el monto de recarga realizado por sus clientes como en la duración de su suscripción con la compañía. Para ser elegible para la promoción, los clientes 
deben recargar un mínimo de $20 y un máximo de $80 y haber estado suscritos durante al menos un año.

En la promoción SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su recarga es inferior a $38 y han estado afiliados al servicio por tres años o menos.

Por otro lado, la promoción MegaRecharge está dirigida a los clientes que han estado suscritos por más de tres años, ofreciéndoles un monto de recarga triplicado independientemente del monto recargado.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente, el monto de la recarga y la duración de su suscripción, y determine si la promoción les aplica 
y calcule el monto total de recarga incluyendo la promoción.
*/

const prompt = require(`prompt-sync`)()

const minRecharge = 20
const maxRecharge = 80
const dupRecharge = 38
const minYears = 1
const yearsMegaPromo = 3


function main() {
    const clientName = prompt(`Add the client name: `)
    const sDate = prompt(`What is your subscription date (use this format YYYY/MM/DD): `)
    const rechargeAmount = parseFloat(prompt(`Ingrese el monto que desea recargar: $ `))
    const recharge = calculateRecharge (sDate, rechargeAmount, clientName)

 return recharge
}
main()

function calculateRecharge (sDate, rechargeAmount, clientName) {

    const miliSec = 1000
    const sec = 60
    const minutes = 60
    const hour = 24
    const subscriptionDate = new Date(sDate);
    const currentDate = new Date();
    const diffMs = currentDate - subscriptionDate;
    const totalDays = (diffMs / (miliSec * sec * minutes * hour));
    const yearsSubscribed = (totalDays / 365);

    const sSRecharge = rechargeAmount + rechargeAmount
    const mRRecharge = rechargeAmount + rechargeAmount + rechargeAmount


    if (yearsSubscribed < minYears || rechargeAmount < minRecharge || rechargeAmount > maxRecharge) {
        return console.log(`SORRY ${clientName} THIS PROMOTION IS NOT VALID FOR YOU !!!`)

    } else if (yearsSubscribed < yearsMegaPromo && rechargeAmount >= dupRecharge) {
        return console.log(`SORRY ${clientName}  THIS PROMOTION IS NOT VALID FOR YOU !!!`)

    } else if (yearsSubscribed < yearsMegaPromo && rechargeAmount <= dupRecharge) {
        return console.log(`CONGRATS ${clientName}, YOU GET THE SUPER SAVER PROMOTION. 
        Your recharge will be:$ ${sSRecharge}`)

    } else if (yearsSubscribed >= yearsMegaPromo) {
        return console.log(`CONGRATS ${clientName}, YOU GET THE MEGARECHARGE PROMOTION. 
        Your recharge will be:$ ${mRRecharge}`)
    }

}








