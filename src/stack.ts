
import { ListNode } from './list-node';

class Stack<T = any> {
  top: ListNode<T> | null = null;
  // last: ListNode<T> | null = null;
  size: number;

  constructor() {
    this.size = 0;
  }

  push(node: T): void {
    const newNode = new ListNode(node);

    newNode.next = this.top;
    this.top = newNode;

    this.size++;
  }

  pop(): T | null {
    const result = this.top;

    if (!result) {
      return null;
    }
    this.top = result.next;
    this.size--;
    
    return result.val;
  }

  peek(): T | null {
    if (!this.top) {
      return null;
    }
    return this.top.val;
  }

}

export { Stack };