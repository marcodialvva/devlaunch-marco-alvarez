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
