
/*
Crea un programa que simule la operación de una máquina expendedora, permitiendo a un usuario seleccionar 
de una lista de productos e insertar monedas hasta que alcance o supere la cantidad requerida para su producto elegido.


La máquina expendedora solo aceptará denominaciones de monedas específicas, y si el usuario insert más del monto requerido, 
deberá devalver el exceso como cambio.

La máquina expendedora tiene tres productos: A (🍔), B (🍕)y C (🌮)

Cada producto tiene un precio específico: A cuesta $14. B cuesta $10. C cuesta $8.

Muestra la Lista de productos con los precios correspondientes e iconos al usuario

La máquina acepta monedas en denominaciones de $1, $2, $5 y $10. Muestra las monedas aceptadas al usuario y pídeles 
que inserten una de estas cantidades.

Pide al usuario que seleccione un producto escribiendo su letra correspondiente (A,B, O c). Si el usuario ingresa una opción inválida, 
el programa debe pedirle nuevamente hasta que ingrese una seleccion valida.

Después de seleccionar un producto, solicita al usuario que inserte monedas hasta que el monto total insertado coincida o exceda 
el precio del producto seleccionado.


Lleva el registro de la cantidad insertada y nuestra el balance al usuario después de cada inserción de moneda. Una vez que se alcanza el monto requerido:


Muestra el producto seleccionado y un mensaje confirmando la compra. Calcula y muestra cualquier cambio si la cantidad insertada excede el precio del producto.

Limpia la consola después de cada inserción de moneda y solicitud de selección de producto para una
experiencia de usuario más limpia.

Ejemplo:
El usuario selecciona el producto A (2) con un precio de $14.
El usuario comienza a insertar monedas: Inserta $5 → Balance: $5 Inserta $10 → Balance $15

La máquina confirma la compra de ® y devuelve $1 como cambio. Requisitos Adicionales

Implementa validación de entrada para monedas inválidas o entradas no numérica


*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const burgerPrice = 14;
const pizzaPrice = 10;
const tacoPrice = 8;

function vendingMachine() {
    let subtotalBill = 0;
    let continueOrder: string;
    let restaurantOrder: string[] = [];

    do {
        let validSelection = false;

        while (!validSelection) {
            console.clear();
            console.log(`Welcome to the vending machine, here is the menu:
        A) 🍔 $14
        B) 🍕 $10
        C) 🌮 $8        
        `);
            const menuElection = prompt(`What do you want to eat, enter your option: A, B or C:   `).toLowerCase();

            if (menuElection === 'a') {
                console.clear();
                const menuQuantity = parseInt(prompt(`How many Burgers 🍔 do you want: `));
                if (!isNaN(menuQuantity) && menuQuantity > 0) {
                    subtotalBill += burgerPrice * menuQuantity;
                    restaurantOrder.push(`Burger 🍔: ${menuQuantity}`);
                    validSelection = true;
                } else {
                    console.log("Invalid quantity. Please try again.");
                }
            } else if (menuElection === 'b') {
                console.clear();
                const menuQuantity = parseInt(prompt(`How many slices of PIZZA 🍕 do you want: `));
                if (!isNaN(menuQuantity) && menuQuantity > 0) {
                    subtotalBill += pizzaPrice * menuQuantity;
                    restaurantOrder.push(`Pizza 🍕: ${menuQuantity}`);
                    validSelection = true;
                } else {
                    console.log("Invalid quantity. Please try again.");
                }
            } else if (menuElection === 'c') {
                console.clear();
                const menuQuantity = parseInt(prompt(`How many TACOS 🌮 do you want: `));
                if (!isNaN(menuQuantity) && menuQuantity > 0) {
                    subtotalBill += tacoPrice * menuQuantity;
                    restaurantOrder.push(`Taco 🌮: ${menuQuantity}`);
                    validSelection = true;
                } else {
                    console.log("Invalid quantity. Please try again.");
                }
            } else {
                console.log(`Invalid option, please try again.`);
            }
        }
        console.clear();
        console.log(`The current total bill is $${subtotalBill}`);

        continueOrder = prompt(`Do you want to add more products? Y/N: `).toLowerCase();
    } while (continueOrder === 'y');

    console.log(`Your final bill is $${subtotalBill}`);
    console.log(`Your order is: ${restaurantOrder.join(", ")}`);

    console.clear();
    console.log (` REMEMBER: This vending machine only accepts this currency: $1, $2, $5, $10`);

        let totalPayment = 0
        const acceptedCoins = [1, 2, 5, 10]; 

    while (totalPayment < subtotalBill) {
        console.clear();
        console.log(`You have paid $${totalPayment} of $${subtotalBill}`);
        console.log (` REMEMBER: This vending machine only accepts this currency: $1, $2, $5, $10`);
        let payment = parseInt(prompt(`Enter your payment:   `));
     
        if (acceptedCoins.includes(payment)) {
            totalPayment += payment;
            console.clear();
            console.log (` REMEMBER: This vending machine only accepts this currency: $1, $2, $5, $10`);
            console.log(`You have paid $${totalPayment} of $${subtotalBill}`);
        } else {
            console.log(`Invalid coin, please try again.`);
    }
}
if (totalPayment > subtotalBill) {
    console.log(`Your change is $${totalPayment - subtotalBill}`);
} else if ( totalPayment === subtotalBill) {
    console.log(`Thank you for your purchase`);}
}
vendingMachine();

