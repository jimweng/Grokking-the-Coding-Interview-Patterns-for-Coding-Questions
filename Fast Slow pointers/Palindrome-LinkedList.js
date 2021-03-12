/**
 *   想法：
 *      1. 注意constraint，必須要在O(N)下且constant space
 */

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
  
  const is_palindromic_linked_list= function(head) {
    let check = head, second_half = [], i = 0;
    let middle_element = find_middle_element(head); // O(N)
    let middle = middle_element.next;

    while (middle !== null) {   // O(N)
        second_half.push(middle.value);
        middle = middle.next;
    }

    second_half = second_half.reverse()
    
    while(second_half[i] === check.value) { // O(N)
        i += 1; 
        check = check.next;
    }

    if ( i === second_half.length) {
        return true
    }

    return false;

  };

  const find_middle_element = (head) => {
    let slow = head, fast = head
    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
  }
  
  
  head = new Node(2)
  head.next = new Node(4)
  head.next.next = new Node(6)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(2)
  
  console.log(`\nIs palindrome: ${is_palindromic_linked_list(head)}`)
  
  head.next.next.next.next.next = new Node(2)
  console.log(`\nIs palindrome: ${is_palindromic_linked_list(head)}`)


  /**
   *     Learned:
   *        1. find_middle 是很重要的基本
   *        2. 可以練習linkedList reverse
   *        
function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
   */