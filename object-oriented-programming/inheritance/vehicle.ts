/*
Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte.
El sistema debe representar diferentes tipos de vehiculos y sus comportamientos utilizando una estructura de herencia de clases

Todos los yehículos tienen un emoj1, marca, modelo y año de fabricación.
Los vehículos deben poder arrancar y mostrar su información.

Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado.
Las netocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).

*/

type CarBrand = "Toyota" | "Hyundai" | 'BYD' | "Nissan" | "CHEVROLET" | "Mack" | "BMW" | "Mercedes Benz"
type MotoBrand = 'Yamaha' | 'Harley Davidson' | 'BMW' | 'Ducati' | 'Kawasaki'
type VehicleStyle = 'Motorcycle' | 'Sedan' | 'Pick Up Truck' | 'SUV' | 'Truck' | 'Mini Van'
type SideCar = '1' | '2' | 'No Sidecar'

class Vehicle {
  protected emoji: string
  protected brand: CarBrand | MotoBrand
  protected model: string
  protected year: number
  protected style: VehicleStyle

  constructor(emoji: string, brand: CarBrand | MotoBrand, model: string, year: number, style: VehicleStyle) {
    this.emoji = emoji
    this.brand = brand
    this.model = model
    this.year = year
    this.style = style
  }

  star() {
    return `trrrtrrtrtrtrtrttrtrtrtrtrt 💥💥💥💥💥`
  }

  toString() {
    return `${this.emoji}\nBrand:${this.brand}\nModel:${this.model}\nYear:${this.year}`

  }
}

class Car extends Vehicle {
  public doors: number

  constructor(emoji: string, brand: CarBrand, model: string, year: number, style: VehicleStyle, doors: number) {
    super(emoji, brand, model, year, style)
    this.doors = doors
  }

  turnOnAC() {
    return `TURN ON THE AC OF ${this.brand} ${this.model}`
  }

  turnOffAC() {
    return `TURN Off THE AC OF ${this.brand} ${this.model}`
  }

}

class Motorcycle extends Vehicle {
  public sidecar: SideCar

  constructor (emoji: string, brand: MotoBrand, model: string, year: number, style: VehicleStyle, sidecar: SideCar ) {
    super  (emoji, brand, model, year, style)
    this.sidecar = sidecar
  }

  wheelie (){

    return `🚨🛵🛵🛵🛵🚨`
  }



}



const car1 = new Car('🛻', 'CHEVROLET', 'COLORADO ZR2', 2025, 'Pick Up Truck', 4)
const moto1 = new Motorcycle ('🏍️', 'Kawasaki','KATANA', 2025, 'Motorcycle','No Sidecar')

console.log(car1.star())
console.log(car1.toString())
console.log(car1.turnOnAC())

console.log (moto1.star())
console.log(moto1.toString())
console.log(moto1.wheelie())