/*
El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California,
A que ofrece membresías por $150 al mes.
Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados y cuenta con comodidades como sauna, piscina y clases grupales.

*/

const gymName = "ELITE FITNESS CENTER"
const gymCityLocation = `Palo Alto`
const gymStateLocation = `California`

const gymMembershipCost = 150
const openHour = 6
const closeHour = 10

const certifiedTrainers = 10
const gymFacilities = `Sauna y Piscina `
const others = `Clases Grupales`

console.log(gymName)
console.log(gymCityLocation, gymStateLocation)
console.log(`Price:$${gymMembershipCost}/mes`)
console.log(gymFacilities)
console.log(`Open at: ${openHour}:00Am
Close at:${closeHour}:00PM `)
console.log(`Team: ${certifiedTrainers} Certified Trainers`)

