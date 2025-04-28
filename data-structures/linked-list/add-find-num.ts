/*
Enunciado de Ejercicio
Crear una Linked List y Buscar un Elemento

Crea una lista enlazada simple en TypeScript que permita:

Agregar elementos a la lista.
Implementar un método que busque un elemento específico en la lista, devolviendo true si el elemento se encuentra y false si no.

Requisitos:

Define la clase Nodo y la clase LinkedList.
Implementa los métodos agregar y buscar.
Prueba tu implementación agregando algunos números a la lista y buscando un número específico.


Ejemplo de Uso
Crea una nueva lista enlazada.
Agrega los números 10, 20, 30 y 40.
Busca el número 20 (debería devolver true).
Busca el número 50 (debería devolver false).



*/

class Node1<T> {
    constructor(
        public value: T,
        public nextNode: Node1<T> | null = null
    ) { }

}

class linkedList1<T> {
    head: Node1<T> | null = null;

    constructor() {
        this.head = null;
    }


    add(value: T) {
        const newNode = new Node1<T>(value);
        let currentNode = this.head;
        
        if (!currentNode) {
            this.head = newNode;
        } else {
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode
            }
          
            currentNode.nextNode = newNode;

        }
  
    }

    findElement( value: T) {
   
    const isIn =  this.printList().find((element) => element === value) ? true : false
    return isIn;
        
    }
    printList(): T[]{
        const values:T[]=[];
        let currentNode = this.head;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        return values;
    }


}


const list = new linkedList1<number>();
list.add(10)
list.add(20)
list.add(30)
list.add(40)

console.log (list.printList())
console.log(list.findElement(20)) 
console.log(list.findElement(50))

