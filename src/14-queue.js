const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.current = this.queue;
    this.head = this.queue;
    this.element = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.length += 1;
    if (this.current.value !== undefined) {
      this.current.next = new ListNode();
      this.current = this.current.next;
      this.current.value = element;
    } else {
      this.current.value = element;
    }
    return this.queue;
  }

  dequeue() {
    this.head = this.queue.next;
    this.element = this.queue.value;
    this.queue = this.head;
    return this.element;
  }
}

module.exports = Queue;
