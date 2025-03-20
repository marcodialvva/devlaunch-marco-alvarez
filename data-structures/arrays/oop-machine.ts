import PromptSync from "prompt-sync";
const prompt = PromptSync();

interface ProductInfo {
    price: number;
    food: string;
}

type Product = 'A' | 'B' | 'C';

class VendingMachine {
    private acceptedCoins: number[];
    private totalPayment: number;
    private displayProducts: string;
    private productSelected: Product | null;
    private products: Record<Product, ProductInfo>


    constructor (){
        this.acceptedCoins = [1, 2, 5, 10];
        this.totalPayment = 0;
        this.productSelected = null;
        this.displayProducts =  'A) Burger 🍔, B) Pizza 🍕, C) Taco 🌮';
        this.products = {
            A: { price: 14, food: 'Burger 🍔' },
            B: { price: 10, food: 'Pizza 🍕' },
            C: { price: 8, food: 'Taco 🌮' }
        }
    }   

    public start = ():void => {

        this.productSelected = this.requestProduct();
        const {price, food} = this.products[this.productSelected];

        while (this.totalPayment < price) {
            console.clear();
            const coin = this.requestCoin(price, food);
            this.totalPayment += coin;
        }
        console.clear()
        console.log(`You have selected ${food} `)
        console.log(`Your Change: $${this.totalPayment-price}`)
        console.log(`Enjoy your ${food}!`)
    }

    private requestProduct = ():Product => {

        let option: string = '';
        option = prompt(`Select a product: ${this.displayProducts}: `).toUpperCase()
        return option as Product;

    }
    private requestCoin = (price:number, food:string):number => {

        let coin: number = 0;
        console.log(`This vending machine only accepts this coins: ${this.acceptedCoins.map(coin=> `$${coin}`).join(', ')}`);
       
        console.log(` 
            Product: ${food} 
            Price: $${price}
            Balance: $${this.totalPayment}
            `)       
        coin = parseInt(prompt(`Insert your coin: `));

        return this.acceptedCoins.includes(coin) ? coin : 0
    }

}

const vendingMachine = new VendingMachine();
vendingMachine.start();
