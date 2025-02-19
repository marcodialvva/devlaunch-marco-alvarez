/*
un zoológico necesita un sistema para gestionar los animales y sus comportamientos.
Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.


Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido y mostrar su información básica.


Algunos animales como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer sonar su trompa y tienen un tamaño específico 
( por ejemplo, 'pequeño', 'mediano' o 'grande'). 


Crea una clase base Animal con las propiedades y métodos necesarios.
Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos
y propiedades particulares.
*/

type AnimalSpecie = 'Mammal' | 'Bird' | 'Reptile' | 'Amphibian' | 'Fish' | 'Insects'
type AnimalSize = 'Small' | 'Mid' | 'Large' | 'Extra Large'


class Animal {
  protected name: string
  protected specie: AnimalSpecie
  protected age: number
  protected sound: string
  protected size: AnimalSize
  protected diet: string

  constructor(name: string, specie: AnimalSpecie, age: number, sound: string, size: AnimalSize, diet: string) {
    this.name = name
    this.specie = specie
    this.age = age
    this.sound = sound
    this.size = size
    this.diet = diet
  }
  _sound() {
    return console.log(`${this.name} sounds like this ${this.sound}`)
  }

  toString() {
    return `Name: ${this.name}\nSpecie: ${this.specie}\nAge: ${this.age}\nSize: ${this.size}\nDiet: ${this.diet}`
      }

}

class Lion extends Animal {
  hierarchy: string


  constructor(name: string, specie: AnimalSpecie, age: number, sound: string, size: AnimalSize, hierarchy: string, diet: string) {
    super(name, specie, age, sound, size, diet)
    this.hierarchy = hierarchy
  }

  print(){
    const info = this.toString ()
    return `🦁: ${info}`
  }

  sound2(sound2:string){
    return console.log (`THIS LION SAYS: ${sound2}`)
  }

}

class Elephant extends Animal {
  trunkSize: string

  constructor(name: string, specie: AnimalSpecie, age: number, sound: string, size: AnimalSize, diet: string, trunkSize: string) {
    super(name, specie, age, sound, size, diet)

    this.trunkSize = trunkSize
  }
  print(){
    const info = this.toString ()
    return `🐘: ${info}`
  }
}


const lion1 = new Lion ('Mufasa','Mammal', 5, 'Raoooow','Large','kING OF THE JUNGLE', 'MEAT AND MEAT')
const fanti1 = new Elephant ('Fantito','Mammal',1,'PPPPPPPHHHHHHHHHMMMMMMMMM','Extra Large','plants,bushes and fruit', 'tiny')


lion1._sound()
lion1.sound2('VIVA LA LIGA')

fanti1._sound()
//console.log(lion1.toString()) esta es la forma general, la de abajo es una alternativa individual
console.log(lion1.print())
//console.log(fanti1.toString())
console.log(fanti1.print())
