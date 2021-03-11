/**
 *   想法：
 *      1. 相當直觀，一個走一步，一個走兩步
 *      2. 注意奇數、偶數，偶數要回傳第二個element
 */

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  const find_middle_of_linked_list = function(head) {
    let slow = head, fast = head;

    //
    //
    while (fast.next !== null) {
        if (fast.next.next == null) {
            return slow.next;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    //
    //
    /**
     *  簡潔一點的寫法
     */

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //
    //
    
    return slow;
  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  
  head.next.next.next.next.next = new Node(6)
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  
  head.next.next.next.next.next.next = new Node(7)
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

  /**
   *   Learned: 
   *        解出來了，但是可以想看看更好的解法。如果判斷式感覺很卡，很有機會是work around
   */