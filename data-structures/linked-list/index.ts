// Single Linked List
class ListNode<T> {
    constructor(
        public value: T,
        public nextNode: ListNode<T> | null = null
    ) { }

}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    constructor() {
        this.head = null;
    }

    add(value: T) {
        let currentNode = this.head;
        const newNode = new ListNode<T>(value);
        if (!currentNode) {
            this.head = newNode;
        } else {

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }
    addToHead(value: T) {
        const newNode = new ListNode(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    addToTail(value: T) {
        let currentNode = this.head;
        if(!currentNode){
            this.head = new ListNode(value);
            return;
        }
    }


    toString() {
        let currentNode = this.head;
        const values: T[] = [];
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        console.log(values.join(' ->'));
    }
}


// Nodo de lista doblemente enlazada
class DoublyListNode<T> {
    public prev: DoublyListNode<T> | null = null; // Propiedad prev
    public nextNode: DoublyListNode<T> | null = null; // Propiedad nextNode

    constructor(public value: T) {}
}

// Lista doblemente enlazada
class DoublyLinkedList<T> {
    head: DoublyListNode<T> | null = null;
    tail: DoublyListNode<T> | null = null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value: T) {
        const newNode = new DoublyListNode(value); // Cambiar a DoublyListNode
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.nextNode = this.head;
        this.head.prev = newNode;   
        this.head = newNode;
    }

    addToTail(value: T) {
        const newNode = new DoublyListNode(value); // Cambiar a DoublyListNode
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.prev = this.tail;
        this.tail.nextNode = newNode;
        this.tail = newNode;
    }

    toString() {
        let currentNode = this.head;
        const values: T[] = [];
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        console.log(values.join(' <-> '));
    }
}




const l1 = new LinkedList<number>();
const l2 = new DoublyLinkedList<string>();


l1.add(1);
l1.add(4);
l1.add(2);

l2.addToHead('A');
l2.addToTail('B');
l2.addToTail('C');

l2.toString();

