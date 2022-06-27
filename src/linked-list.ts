import {ILinkedList} from "./linked-list.interface";
import {Node} from "./node";

export class LinkedList<T> implements ILinkedList<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    private index: number = 0;

    public insertInBegin(data: T): Node<T> {
        const node = new Node(data, this.index++);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    public insertAtEnd(data: T): Node<T> {
        const node = new Node(data, this.index++);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            const getLast = (node: Node<T>): Node<T> => node.next ? getLast(node.next) : node;
            if (this.head && getLast(this.head)) {
                const lastNode = getLast(this.head);
                lastNode.next = node;
                this.head = lastNode.next;
            }
        }
        return node;
    }

    deleteNode(node: Node<T>): void {
        debugger;
        if (!this.tail && !this.head) {
            console.log('no data in list...!');
        } else {
            while (this.tail && this.tail.next) {
                if (this.tail.data === node.data) {
                    console.log(this.tail.data);
                } else {
                    this.tail = this.tail.next;
                }
            }
        }
    }

}
