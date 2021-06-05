/**
 *  想法：
 *      1. Median就是用two heap
 *      2. (看答案做)
 * 
 */

const Heap = require('collections/heap');

class SlidingWindowMedian {

    constructor() {
        this.maxHeap = new Heap([], null, (a, b) => a - b);
        this.minHeap = new Heap([], null, (a, b) => b - a);
    }

    find_sliding_window_median(nums, k) {
        const result = [];

        // 每k個做一次
        for (let i = 0; i < nums.length; i++) {
            // insert num
            if (this.maxHeap.length == 0 || this.maxHeap.peek() >= nums[i]) {
                this.maxHeap.push(nums[i]);
            } else {
                this.minHeap.push(nums[i]);
            }

            // 跟原本find Median一樣
            this.reblance_heap();

            // 就是防止cold start，一開始sliding window內數量不足
            if (i - k + 1 >= 0) {
                if (this.minHeap.length == this.maxHeap.length) {
                    result[i - k + 1] = (this.maxHeap.peek() / 2.0) + (this.minHeap.peek() / 2.0);
                } else {
                    result[i - k + 1] = this.maxHeap.peek();
                }


                // 刪除
                const elementToBeRemoved = nums[i - k + 1];
                if (elementToBeRemoved <= this.maxHeap.peek()) {
                    this.maxHeap.delete(elementToBeRemoved);
                } else {
                    this.minHeap.delete(elementToBeRemoved);
                }

                this.reblance_heap();
            }
        }

        return result;
    }

    reblance_heap() {
        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }
};



var slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
    [1, 2, -1, 3, 5], 2)

console.log(`Sliding window medians are: ${result}`)

slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
    [1, 2, -1, 3, 5], 3)
console.log(`Sliding window medians are: ${result}`)