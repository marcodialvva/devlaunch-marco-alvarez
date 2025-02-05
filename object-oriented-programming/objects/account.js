/*
Estás diseñando un sistema básico para gestionar cuentas bancarias de clientes.
Cada cuenta bancaria tendrá un identificador único, un nombre del titular, y un saldo.


Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.
El objeto debe ser creado por medio de un funcion declaration, con todas las propiedades y métodos deben 
estar definidos dentro de la función usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):
-id: identificador único de la cuenta.
-holderName: nombre del titular de la cuenta.
-balance: saldo de la cuenta.

Métodos de la cuenta bancaria (dentro de la función usando this) :
deposit (amount): incrementa el saldo de la cuenta.
withdraw (amount): disminuye el saldo de la cuenta si hay suficientes fondos. 
transfer (toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta
si hay suficientes fondos disponibles.

*/

function Account(id, name, balance = 0) {
  this.id = id,
    this.name = name,
    this.balance = balance

  this.deposit = (amount) => {
    this.balance += amount
    return this

  }

  this.withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount
    }
    else {
      console.log("No tiene fondos suficientes")
      return this
    }
  }
  this.transfer = (toAccount, amount) => {
    if (this.balance >= amount) {
      this.withdraw(amount),
        toAccount.deposit(amount)
      return this
    }
    else {
      console.log("Fondos insuficientes para la transferencia.")
      return this
    }

  }

  return this

}

const acc1 = new Account(1, 'Marco', 10000)
const acc2 = new Account(2, 'Diego')


acc1.transfer(acc2, 5000).deposit(3500)
console.log(acc1, acc2)

