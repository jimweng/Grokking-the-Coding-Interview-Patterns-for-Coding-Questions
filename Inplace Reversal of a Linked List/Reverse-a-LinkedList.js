/**
 *  想法：
 *      1. in-place，但是過去經驗還是需要一個temp node
 *      2. 寫過，但多了個變數，記得reverse就是prev, current
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
  
  
  const reverse = function(head) {
    let prev = null, current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
  };
  
  head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(10);
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
  
  