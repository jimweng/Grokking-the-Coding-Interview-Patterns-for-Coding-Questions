/**
 *   想法：
 *      1. constraints: should not use extra space and input LinkedList should be modified in-place
 * 
 */

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        console.log(result);
    }
}

const find_middle_element = (head) => {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


const reorder = function (head) {
    let current = head, middle_element = [];
    let middle = find_middle_element(head);

    let second_half = reverse(middle), prev = head;

    // 不斷插入 ( 要再練習 )
    while (head !== null && second_half !== null) {
        let temp = head.next;
        head.next = second_half;
        head = temp;

        temp = second_half.next;
        second_half.next = head;
        second_half = temp;
    }

    if (head !== null) {
        head.next = null
    }

    return
}

const reverse = (middle) => {
    let prev = null;

    while (middle != null) {
        let next = middle.next;
        middle.next = prev;
        prev = middle;
        middle = next;
    }

    return prev;
}


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()
