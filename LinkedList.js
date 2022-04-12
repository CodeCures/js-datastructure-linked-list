class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(item){
        let node = new Node(item);

        if(this.#isEmpty()){
            this.head = node;
            this.size++;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;

        this.size++;
    }

    prepend(item){
        let node = new Node(item);

        if(this.#isEmpty()){
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
        
        this.size++;

    }

    indexOf(item){
        if(this.#isEmpty()) return -1;

        let current = this.head;

        while (current !== null) {
            if (current.value === item) return current.value;
            current = current.next;
        }

        return -1;
    }

    contains(item){
        return this.indexOf(item) !== -1;
    }

    toArray(){
        let array = [];

        let current = this.head;

        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
    }

    getNthNode(n){
        let current = this.head;

        for (let i = 0; i < n - 1; i++) {
            current = current.next;
        }
        return current.value || null;
    }

    getNthNodeFromTheEnd(n){
        let left = this.head; 
        let right = this.head;

        for (let i = 0; i < n - 1; i++) {
            right = right.next;

            while (right !== null) {
                left = left.next;
                right = right.next;
            }
            return left.value;
        }
    }

    reverse(){
        let prev = null;
        let current = this.head;

        while (current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    size(){
        return this.size;
    }

    deleteFirst(){
        if (this.#isEmpty()) return ;
        
        this.head = this.head.next;
        this.size--;
    }

    deleteLast(){
        if (this.#isEmpty()) return ;

        let prev = this.#getPrevious();
        prev.next = null;

        this.size--;
    }

    deleteMiddle(){
        if (this.#isEmpty()) return;

        let current = this.head;

        let mid = Math.floor(this.size / 2);

        for (let i = 0; i < mid; i++) {
            current = current.next;
        }

        current = current.next;
    }

    
    #getPrevious(){
        let prev = null;
        let current = this.head;

        while(current.next !== null){
            prev = current;
            current = current.next;
        }
        return prev;
    }

    #isEmpty(){
        return this.head === null;
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(50);

list.deleteLast();


console.log(list);
