export class LinkedList<TElement> {
  head: LinkedListNode<TElement> | null;
  tail: LinkedListNode<TElement> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  public push(element: TElement): TElement {
    const newNode = new LinkedListNode(element);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }

    return element;
  }

  public pop(): TElement | null {
    if (this.length < 1 || !this.tail) {
      return null;
    }
    if (this.length === 1) {
      const { value } = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }
    if (this.tail) {
      let { value } = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
      this.length--;
      return value;
    }

    return null;
  }

  public shift(): TElement | null {
    if (this.length < 1 || !this.head) {
      return null;
    }
    if (this.length === 1 && this.head) {
      const { value } = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }
    const { value } = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
    this.length--;
    return value;
  }

  public unshift(element: TElement) {
    const newNode = new LinkedListNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return;
    }
  }

  public delete(element: unknown) {
    let currNode = this.head;
    if (currNode === null) return;
    if (currNode.value === element) {
      this.head = null;
      this.tail = null;
      this.length--;
    }
    while (currNode.next !== null) {
      currNode = currNode?.next;
      if (currNode.value === element) {
        if (currNode.prev) {
          currNode.prev.next = currNode.next;
          if (currNode.next) {
            currNode.next.prev = currNode.prev;
          }
        }
        this.length--;
      }
    }
  }

  public count(): number {
    return this.length;
  }
}

class LinkedListNode<TElement> {
  value: TElement;
  next: LinkedListNode<TElement> | null;
  prev: LinkedListNode<TElement> | null;

  constructor(value: TElement) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
