interface Receipt {
    name: string
    amount: number
    taxes: number
    total: number
}

const receipts: Receipt[] = [

    { name: 'Restaurant Item 1', amount: 8, taxes: 2.5, total: 100 },
    { name: 'Restaurant  Item 2', amount: 4, taxes: 4.5, total: 120 },
    { name: 'Restaurant Item 3', amount: 5, taxes: 5, total: 150 },
    { name: 'Restaurant Item 4', amount: 3, taxes: 3, total: 115 },
    { name: 'Item 5', amount: 1, taxes: 0, total: 200 },
    { name: 'Item 6', amount: 1, taxes: 0, total: 60 },

]

const incomes: number[] = [
    3000, // #0
    300, //#1
    1200 //#2
]

let totalIncome = 0

for (let i = 0; i < incomes.length; i++) {
    totalIncome += incomes[i]
}

console.log(totalIncome)

let totalExpenses = 0 

//receipts.forEach ((receipt,i) => {    en este caso va con parentesis porque van 2 argumentos receipt, i.
//  console.log (receipt,i)})

receipts.forEach(receipt => {
  totalExpenses+= receipt.total
})

console.log (totalExpenses)

// un .find retorna un true or false. Si es true significa que encontramos ese valor con la condicion dada


