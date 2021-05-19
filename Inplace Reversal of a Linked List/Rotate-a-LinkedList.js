/**
 *  想法：
 *      1. 先看長度，做mod
 *      2. 然後改變links
 */

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  
  const rotate = function(head, rotations) {
    
    // find the length and last node
    let current = head, listLength = 0, last_node = null;
    while(current !== null) {
        last_node = current;
        current = current.next;
        listLength += 1;
    }

    const rotationLength = (listLength < rotations) ? rotations % listLength : rotations ;

    // find the one to rotate
    let prev = null, i = 0;
    current = head;
    while (i < rotationLength) {
        prev = current;
        current = current.next;
        i+=1;
    }

    prev.next = null;
    last_node.next = head;
    

    return current;
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of rotated LinkedList are: ${rotate(head, 8).get_list()}`)