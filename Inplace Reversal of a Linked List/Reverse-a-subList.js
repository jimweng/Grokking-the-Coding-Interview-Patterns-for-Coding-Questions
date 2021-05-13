/**
 *  想法：
 *      1. 多兩個pointer指向置換前與後的element
 */

class Node {
  constructor(value, next = null) {
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

const reverse_sub_list = function (head, p, q) {
  let front = head, back = head;

  // mark the sub-list
  while (p - 2 > 0) {
    p--;
    front = front.next;
  }

  while (q > 0) {
    back = back.next;
    q--;
  }

  // reverse the sub-list
  let prev = front, current = front.next;

  while (current != back) {
    let temp = current.next;
    current.next = prev == front ? back : prev; // 頭要接reverse sub-list, 其餘list轉向就好
    prev = current;
    current = temp;
    if (current == back) {                      // 尾要接back
      front.next = prev;
    }
  }

  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)