export class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(node = null) {
    this.head = node;
  }

  add(value) {
    const newNode = new ListNode(value);

    if(!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
  }
}