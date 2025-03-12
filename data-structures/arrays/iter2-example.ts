interface Receipt {
    name: string
    amount: number
    taxes: number
    total: number
}

const _receipts: Receipt[] = [

    { name: 'Restaurant Item 1', amount: 8, taxes: 2.5, total: 100 },
    { name: 'Restaurant  Item 2', amount: 4, taxes: 4.5, total: 120 },
    { name: 'Restaurant Item 3', amount: 5, taxes: 5, total: 150 },
    { name: 'Apple Store ', amount: 3, taxes: 3, total: 115 },
    { name: 'Nike Store', amount: 1, taxes: 0, total: 200 },
    { name: 'Apple Store', amount: 1, taxes: 0, total: 60 },

]

const _incomes: number[] = [
    3000, // #0
    300, //#1
    1200 //#2
]



let _totalIncome = 0

for (let i = 0; i < _incomes.length; i++) {
    _totalIncome += _incomes[i]
}

console.log(_totalIncome)

//este ejemplo y el de abajo son el mismo pero escrito de una forma diferente porque
//por defecto un arrow function siempre retorna algo

const highReceiptTaxes = _receipts.find (_receipt => _receipt.taxes === 5)
//console.log (highReceiptsTaxes?.name)

const expensiveReceipts= _receipts.find(_receipt=> _receipt.total === 200)
console.log(expensiveReceipts)
//return _receipt.name === 'Item 2' 



//console.log (expensiveReceipts?.name)

const overRangeReceipts = _receipts.filter(_receipt => _receipt.total > 115)
//console.log (overRangeReceipts)

const restaurantReceipts = _receipts.filter (_receipt => _receipt.name.includes('Restaurant'))
// console.log (restaurantReceipts)

const highReceiptsTaxes = _receipts.filter(_receipt => _receipt.taxes >=5 )
//console.log (overRangeReceipts)

const soccerShoes = _receipts.find (_receipt => _receipt.name.includes ('Nike Store'))
//console.log(soccerShoes?.total)

let totalTechShops = 0

const techShops = _receipts
.filter(_receipt => _receipt.name.includes('Apple Store'))  // todo es es u array
//.forEach(_receipt => totalTechShops+= _receipt.total) // Como lo de arriba continua siendo un array, volvemos y apliacamos un for each a cada uno
.forEach(({total}) => totalTechShops+= total) // lo de arriba es lo mismo
//console.log(totalTechShops)

let totalAmountReceipt = 0
const amountRestaurantReceipt = _receipts
.filter (_receipt => _receipt.name.includes('Restaurant'))
.forEach(_receipt => totalAmountReceipt+=_receipt.amount)

//console.log(totalAmountReceipt)



const totalTaxesByName = _receipts.map (receipt => ({name: receipt.name, taxes: receipt.taxes})) // forma para retornar un objeto mas corto
console.log (totalTaxesByName)

const totalTaxesAndName = _receipts.map(({taxes}) => ({taxes}) ) // esto es si quisiera retornar un objeto, ejemplo de abajo es solo un array
console.log(totalTaxesAndName)

const totalTaxes = _receipts.map(({taxes}) => taxes) // sacar el valor de los taxes solo como un array
console.log(totalTaxes)

const taxes5 = _receipts.find (_receipt => _receipt.taxes === 5 )
console.log (taxes5)


const _totalExpenses = _receipts.map(_receipt => ({
    ..._receipt,
    percentage : (_receipt.total/_totalIncome*100).toFixed(2)


}))

console.log(_totalExpenses)

const _totalExpenses2 = _receipts.reduce((total, _receipt)=> total + _receipt.total, 0 )
console.log(_totalExpenses2)