class ListNodeE {
    value: number;
    nextNode: ListNodeE | null;

    constructor(value: number, nextNode: ListNodeE | null = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedListE {
    head: ListNodeE | null = null;

    constructor() {
        this.head = null;
    }

    add(value: number) { 
        const newNode = new ListNodeE(value); 
        if (!this.head) {
            this.head = newNode; 
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }


    print() {
        let currentNode = this.head;
        const values: number[] = [];
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        console.log(values);
    }
}

const mergeHead = (head1: ListNodeE | null, head2: ListNodeE | null): ListNodeE | null => {
    const mergedList = new LinkedListE();
    let current1: ListNodeE | null = head1;
    let current2: ListNodeE | null = head2;

    while (current1 || current2) { 
        if (!current1) {
            mergedList.add(current2!.value);
            current2 = current2!.nextNode;
        } else if (!current2) {
            mergedList.add(current1.value); 
            current1 = current1.nextNode;
        } else if (current1.value <= current2.value) {
            mergedList.add(current1.value); 
            current1 = current1.nextNode;
        } else {
            mergedList.add(current2.value); 
            current2 = current2.nextNode;
        }
    }

    return mergedList.head; 
}


const l1A = new LinkedListE();
const l2A = new LinkedListE();

l1A.add(1);
l1A.add(2);
l1A.add(4);
l2A.add(1);
l2A.add(3);
l2A.add(4);

const mergedHead = mergeHead(l1A.head, l2A.head); 


const mergedList = new LinkedListE();
mergedList.head = mergedHead;


mergedList.print(); 