/**
 *   想法：
 *      1. 沒做過Two Heaps題目，想像應該是先maintain一個tree
 *      2. Maintain two heap: Max-heap, Min-heap 
 *      3. 先用來寫heap，之後再手刻
 *      4.1 如果maxHeap > num，放進maxHeap。如果maxHeap比minHeap多超過1個（接受多一個），
 *         把maxHeap.peek()推到minHeap，然後兩個Heap都重組
 *      4.2 若是奇數就直接回傳maxHeap.peek()
 *     
 * 
 */

const Heap = require('collections/heap');

class MedianOfAStream {

    constructor() {
        this.maxHeap = new Heap([], null, (a,b) => a-b);
        this.minHeap = new Heap([], null, (a,b) => b-a);
    }

    insert_num(num) {
     if(this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
        this.maxHeap.push(num);
     } else {
        this.minHeap.push(num);
     }

     if(this.maxHeap.length > this.minHeap.length + 1) {
         this.minHeap.push(this.maxHeap.pop());
     } else if (this.maxHeap.length < this.minHeap.length){
         this.maxHeap.push(this.minHeap.pop());
     }
     
    }
  
    find_median() {
        if (this.maxHeap.length === this.minHeap.length) {
            return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
        }

        return this.maxHeap.peek();
    }
  };
  
  
  
  var medianOfAStream = new MedianOfAStream()
  medianOfAStream.insert_num(3)
  medianOfAStream.insert_num(1)
  console.log(`The median is: ${medianOfAStream.find_median()}`)
  medianOfAStream.insert_num(5)
  console.log(`The median is: ${medianOfAStream.find_median()}`)
  medianOfAStream.insert_num(4)
  console.log(`The median is: ${medianOfAStream.find_median()}`)