import Node from "./Node.js";

export default class LinkedList {
    listHead;

    constructor() {
        this.listHead = null;
    }

    append(newNode) {
        //Prevent shallow copy issues
        let node = new Node(newNode.value());
        if (!this.listHead) {
            this.listHead = node;
            return;
        }
        let tmpHead = this.listHead;
        let prevHead;
        while (this.listHead) {
            prevHead = this.listHead;
            this.listHead = this.listHead.next;
        }
        prevHead.next = node;
        this.listHead = tmpHead;
    }

    prepend(node) {
        node.next = this.listHead;
        this.listHead = node;
    }

    size() {
        let tmpHead = this.listHead;
        let count = 0;
        while (this.listHead) {
            count++;
            this.listHead = this.listHead.next;
        }
        this.listHead = tmpHead;
        return count;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let tmpHead = this.listHead;
        let prevHead;
        while (this.listHead) {
            prevHead = this.listHead;
            this.listHead = this.listHead.next;
        }
        this.listHead = tmpHead;
        return prevHead;
    }

    at(index) {
        if (index == 0) {
            return this.listHead;
        }
        let tmpHead = this.listHead;
        for (let i = 0; i < index; i++) {
            this.listHead = this.listHead.next;
            if (this.listHead == null) {
                return "ERROR";
            }
        }
        let returnNode = this.listHead;
        this.listHead = tmpHead;
        return returnNode;
    }

    pop() {
        //Remove last element
        let tmpHead = this.listHead;
        let prevHead;
        let prevPrevHead;
        if (this.listHead.next == null) {
            this.listHead == null;
            return;
        }
        if (this.listHead == null) {
            return;
        }
        while (this.listHead) {
            if (this.listHead.next.next == null) {
                this.listHead.next = null;
                this.listHead = tmpHead;
                return;
            }
            prevHead = this.listHead;
            this.listHead = this.listHead.next;
        }
    }

    contains(value) {
        let tmpHead = this.listHead;
        while (this.listHead) {
            if (this.listHead.value() == value) {
                this.listHead = tmpHead;
                return true;
            }
            this.listHead = this.listHead.next;
        }
        this.listHead = tmpHead;
        return false;
    }

    find(value) {
        //Return index;
        let index = 0;
        let tmpHead = this.listHead;
        while (this.listHead) {
            if (this.listHead.value() == value) {
                return index;
            }
            index++;
            this.listHead = this.listHead.next;
        }
        this.listHead = tmpHead;
        return -1;
    }

    insertAt(node, index) {
        //Hmm..
    }

    removeAt(node, index) {
        //Hmm..?
    }

    //insertAt(value, index) that inserts a new node with the provided value at the given index.
    //removeAt(index) that removes the node at the given index.

    toString() {
        let string = "";
        let tmpHead = this.listHead;
        while (this.listHead) {
            string += `${this.listHead.value()} -> `;
            this.listHead = this.listHead.next;
        }
        string += "null";
        console.log(string);
        this.listHead = tmpHead;
    }
}
