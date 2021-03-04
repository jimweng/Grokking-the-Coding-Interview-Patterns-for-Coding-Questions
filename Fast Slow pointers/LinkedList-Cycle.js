/**
 *  想法：快慢pointers，就是在找是否有cycle
 */

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  const has_cycle = function(head) {
    let slow = head, fast = head;
    
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  
  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList has cycle: ${has_cycle(head)}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList has cycle: ${has_cycle(head)}`)