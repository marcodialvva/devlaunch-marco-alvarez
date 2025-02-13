/*

Sistema de Gestión de Inventario
Descripción: Crea un sistema para gestionar el inventario de una tienda que permita agregar productos,
 vender productos, restockear productos y buscar productos disponibles por categoría.

Requisitos:

Crea una función Store que genere un objeto de tienda.
La tienda debe tener un array de productos.
Cada producto debe tener un identificador único, nombre, categoría, precio y cantidad disponible.
Métodos:
addProduct(id, name, category, price, quantity): Agrega un nuevo producto a la tienda.
 consultQuantity(id, quantity): Vende un producto si hay suficiente cantidad disponible.
restockProduct(id, quantity): Añade más cantidad a un producto existente.
searchAvailableProducts(category): Busca productos disponibles por categoría y devuelve los resultados.


*/

interface IProduct {
  
  id: number,
  name: string,
  category: string,
  price: number,
  quantity: number 
}

function store (){
    
  const products: IProduct [] = []

    return {
      
      addProduct (  id: number,name: string,category: string,price: number,quantity: number) {
        const product = {
            id,
            name,
            category,
            price,
            quantity
        } 
        products.push(product)
        return console.log(`${product.name} has been created`)

      },

      consultQuantity (id:number){
        const product = products.find(prod => prod.id===id)
          if (product && product.quantity > 0 ) {
            console.log (`We have ${product.quantity} ${product.name} for sale`)
            return product.quantity;
          }
          else if (product && product.quantity === 0) {
             console.log (`We have CERO units of ${product.name}`)
          }
          else {console.log (`UPPS !!! WE CAN NOT FIND THE PRODUCTO ~~ WRONG ID`) }

      },

      restockProduct(id: number, quantity: number){
        const product = products.find(prod => prod.id===id)
        if (product) { 
          product.quantity += quantity
          return product.quantity
      
        }

      },

      showAllProducts (){
        console.log (products)  
        }

}


}

const myStore = store()

myStore.addProduct(1, 'Cafe', 'Abarrotes', 10, 100)
myStore.addProduct(2, 'Cerveza', 'Abarrotes', 5, 0)
myStore.addProduct(3, 'Agua', 'Abarrotes', 4, 100)
myStore.addProduct(4, 'Fresca Cero', 'Abarrotes', 3, 100)
myStore.addProduct(5, 'Coca Cola Cero', 'Abarrotes', 3, 100)


myStore.consultQuantity(1)
myStore.consultQuantity(3)
myStore.restockProduct(1,10)
myStore.restockProduct(4,50)
myStore.restockProduct(5,50)
myStore.consultQuantity(4)
myStore.consultQuantity(5)
myStore.consultQuantity(2)

















