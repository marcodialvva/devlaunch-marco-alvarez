import PromptSync from "prompt-sync";

const prompt = PromptSync()

type Product = 'A' | 'B' | 'C'

interface ProductInfo {

price: number
food: string
}

class VendingMachine {
    private validCoins: number []
    private totalInsert: number
    private productSelected: Product | null
    private products: Record<Product, ProductInfo>

  constructor(){
    this.totalInsert = 0
    this.productSelected = null
    this.validCoins = [1, 2, 5, 10]
    this.products = {
        A: { price: 14, food: 'Burger 🍔' },
        B: { price: 10, food: 'Pizza 🍕' },
        C: { price: 8, food: 'Taco 🌮' }

  }  
}

public selectedProduct  = async () => {
    this.productSelected = this.requestProduct()

    const {price, food} = this.products[this.productSelected]

    while (this.totalInsert < price) {
        console.clear()
       const coin = this.requestCoin(price,food)
       this.totalInsert += coin
}

console.clear()
console.log(`You have selected ${food} `)
console.log(`Your Change: $${this.totalInsert-price}`)
console.log(`Enjoy your ${food}!`)
}

private requestProduct = (): Product => {
    let option: string = ''

    const options = Object.keys(this.products) as Product []

    const productList = options.reduce((text, option) => {
        return text + `${option}) ${this.products[option].food}) ` 
    }, '')

    while (!options.includes(option as Product)) {
        console.clear()
        option = prompt(`Select a product: ${productList}: `).toUpperCase()
    }
    return option as Product
}

private requestCoin = (price: number, food: string): number => {
    const coins = this.validCoins.reduce((text, coin) => `${text} ${coin}, `, '')

    console.log(` 
        Product: ${food} 
        Price: $${price}
        Balance: $${this.totalInsert}
        `)
        const coin = parseInt(prompt(`Insert Coin($${coins}): `))

        return this.validCoins.includes(coin) ? coin : 0
}
}

const vendingMachine = new VendingMachine()
vendingMachine.selectedProduct()