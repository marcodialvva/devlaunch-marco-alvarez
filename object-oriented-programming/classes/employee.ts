/*
Horizon Innovations, una destacada empresa enfocada en el bienestar de los empleados, esté desarrollando 
un sistema de sequimiento de salarios que busca mantener registros precisos de las remuneraciones de los empleados,
incluyendo actualizaciones modificaciones salariales.


Para gestionar y manipular los datos salariales de manera eficiente, es útil encapsularlos 
en un sistema de clases. Este enfoque proporciona una estructura clara y organizada para 
manejar las operaciones relacionadas con los salarios, asegurando la modularidad y la mantenibilidad del código.


Para implementar esto, crearenos una clase Employee con una variable principal llamada _salary, que servirá 
como la base para todos los cálculos de salario en el sistema.

Esta clase incluirá dos métodos clave: un "getter" para recuperar el salario actual y un "setter" para modificarlo. 
Es importante que el setter valide que el nuevo valor del salario sea positivo, ya que no se permiten salarios negativos.

Adicionalmente, se incluirá un método giveRaise para aumentar el salario en una cantidad específica

*/

interface IEmployee {
    id: number
    name: string
    position: string
    baseSalary: number
    bonus: number
}

class Employee {

    private _salary: number
    private _bonus: number


    constructor(public id: number, public name: string, public position: string, private baseSalary: number, bonus: number) {
        this.id = id
        this.name = name
        this.position = position
        this._salary = baseSalary
        this._bonus = bonus
    }

    set salary (baseSalary:number){
      if (baseSalary > 0)
      this._salary = baseSalary
    }

    get salary(): number {
        return this._salary + this._bonus
    }

    applyRaise(percentage: number): number {
       return this._salary += this._salary * (percentage / 100) + this._bonus

    }
  
}


const e1 = new Employee(1, 'Marco', 'Software Devs', 5000, 3500)

console.log (e1.salary)
console.log (e1.applyRaise(10))
