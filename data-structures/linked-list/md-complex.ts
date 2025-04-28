/*

Crea una lista enlazada doble (Doubly Linked List) que permita:

Agregar elementos al inicio y al final de la lista.
Eliminar un elemento específico de la lista.
Buscar un elemento en la lista, devolviendo true si el elemento se encuentra y false si no.
Imprimir la lista en orden desde el inicio hasta el final y viceversa.

Requisitos:
Define la clase Nodo para la lista doblemente enlazada que contenga referencias tanto al siguiente nodo como al nodo anterior.
Define la clase DoublyLinkedList que implemente los métodos para agregar, eliminar, buscar e imprimir.
Implementa la lógica para que al eliminar un nodo, se actualicen correctamente las referencias de los nodos adyacentes.


Ejemplo de Uso:
Crea una nueva lista enlazada doble.
Agrega los números 10, 20, 30 y 40 al final de la lista.
Agrega el número 5 al inicio de la lista.
Busca el número 20 (debería devolver true).
Busca el número 50 (debería devolver false).
Imprime la lista de inicio a fin y de fin a inicio.
Elimina el número 30 de la lista.
Imprime la lista nuevamente.


*/

class DoublyListNode1<T> {
    prev: DoublyListNode1<T> | null = null;
    nextNode: DoublyListNode1<T> | null = null;

    constructor(public value: T) {
    }

  
}

class DoublyLinkedList1<T>{

    head: DoublyListNode1<T> | null = null;
    tail: DoublyListNode1<T> | null = null;
    constructor(){
        this.head = null 
        this.tail = null
    }

    addToHead(value:T){
        const newNode = new DoublyListNode1(value)
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        return
    }
    newNode.nextNode = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    }
    printList1(): T[]{
        const values:T[]=[];
        let currentNode = this.head;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        return values;
    }

    findElement(value:T): boolean{
        const isIn = this.printList1().find((element) => element === value) ? true : false
        return isIn;
    }

    headToTail(): T[]{
        const maxtoMin = this.printList1().reverse();
        return maxtoMin; 
    }

    deleteElement(value:T):T[]{
        const newValues = this.printList1().filter((element) => element !== value);
        return newValues;

    }
}

const l3 = new DoublyLinkedList1<number>();
l3.addToHead(10);
l3.addToHead(20);
l3.addToHead(30);
l3.addToHead(40);

console.log(l3.printList1())

l3.addToHead(5);
console.log(l3.printList1())

console.log(l3.findElement(50)) 
console.log(l3.headToTail())

console.log(l3.deleteElement(30))