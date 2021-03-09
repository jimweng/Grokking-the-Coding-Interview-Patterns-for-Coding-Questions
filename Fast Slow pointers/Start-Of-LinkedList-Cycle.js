/**
 *   想法：
 *      1. 要找到cycle的開始點，必須先確認cycle的長度
 *      2. 讓第二個pointer起始點不同（前進cycle length長度）
 */

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  const find_cycle_start = function(head){
    let slow = head, fast = head, cycle_length = 0;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      if (fast === slow) {
        cycle_length = find_cycle_length(slow)
        break;
      }
    }
    return find_start(head, cycle_length);
  };

  const find_cycle_length = (slow) => {
    let current = slow, cycleLength = 0;
    while(true) {
      current = current.next
      cycleLength += 1
      if (current === slow) {
        return cycleLength;
      }
    }
  }

  const find_start = (head, cycle_length) => {
    let pointerOne = head, pointerTwo = head;

    while(cycle_length > 0) {
      pointerTwo = pointerTwo.next;
      cycle_length -= 1
    }

    console.log('in find start')
    while (true) {
      if (pointerOne === pointerTwo) {
        return pointerOne
      }
      pointerOne = pointerOne.next
      pointerTwo = pointerTwo.next
    }

  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  
  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

  /**
   *  Learned:
   *      1. 有cycle，就不會是在中間，而是末端元素cycle回來
   */