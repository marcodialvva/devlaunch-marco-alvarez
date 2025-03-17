/*
En un supermercado se está realizando una oferta promocional en colaboración con la tarjeta Raw Input
disponible para todos los clientes.

La promocion consiste en proporcionar descuentos en las compras en funcion de un número específico, 'n', de productos
procesados en la caja. Inicialmente, se apilica un descuento del 20% a los primeros'n' productos.

Posteriommente, cada Lote sucesivo de 'n' productos recibe un descuento que se reduce a la mitad con respecto al lote anterior.

Por ejemplo, si 'n = 3' y el cliente compra 11 productos, los primeros tres productos reciben un descuento del 20%,
los siguientes tres productos reciben un descuento del 10%, el lote siguiente recibe un descuento del 5%, 
y los dos productos finales no califican para descuento.

Para que los clientes no ordenen de forma estrategica sus productos para sacar ventaja de un mejor descuento, el programa
debe ordenar los productos de menor precio a mayor precio primero

Despúes debe aplicar los descuentos, el programa debe calcular y mostrar el costo total, el monto del descuento y el precio
final a pagar.

calculateDiscuount([3000,1000,200],2)
{total: 5400, subtotal: 6000, discount: 600}

*/

const supermarketBill = [3000,1000,2000]
const nValue = 2

function subGroups(prices: number[], nValue: number): {}  {
    
    let MAX_DISC = 20

    const sortPrices = prices.sort((a,b) => a-b)
    const subgroups: number[][] = []

    for (let i = 0; i < sortPrices.length; i += nValue) {

        subgroups.push(sortPrices.slice(i, i + nValue))
    }

    const discountRange = subgroups.map(subgroup => {
        let actual = MAX_DISC
        if (subgroup.length === nValue) {
            MAX_DISC = MAX_DISC / 2
        } else {
            actual= 0
        }
        return actual
    })

    const totalPrices : number[] = subgroups.reduce((acc, subgroup, i) => {
        const discountedPrices = subgroup.map(price => price * ((100 - discountRange[i]) / 100));
        return acc.concat(discountedPrices);
    }, []);

    const totalPrice : number = totalPrices.reduce ((acumm, price) => acumm + price,0)  
    const subtotalPrice = supermarketBill.reduce((accum, price) => accum + price, 0)
    const differenceBill = subtotalPrice-totalPrice

    return {subtotalPrice, totalPrice, totalPrices, differenceBill}

}

const marketDiscount = subGroups(supermarketBill, nValue)
console.log(marketDiscount)