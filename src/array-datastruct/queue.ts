// linklist with end push front pop

//list
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  // to keep track
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(value: T): void {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
      // head is null
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return value;
  }
  printQueue(): string {
    const store: T[] = [];
    let curr = this.head;
    while (curr) {
      store.push(curr.value);
      curr = curr.next;
    }
    return store.join(", ");
  }
}

export default Queue;
