/**
 *  想法：
 *      1. 先用邏輯寫，再用two heaps。暴力法O(N^2)
 *      2. 用two heaps。O(NlogN)，O(N)個End，在heap中找O(logN)
 * 
 */

const Heap = require('collections/heap');

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};

// Brute-force O(N^2)  
//   const find_next_interval = function(intervals) {
//     const result = Array(intervals.length).fill(-1);
//     for (let i = 0; i < intervals.length; i++) {
//         const currentNext = intervals[i].end;
//         for (let j = 0; j < intervals.length; j++) {
//             if (currentNext <= intervals[j].start) {
//                 result[i] = j;
//                 break;
//             } 
//         }
//     }

//     return result;
//   };

const find_next_interval = function (intervals) {
    const n = intervals.length;

    // 建立兩個maxHeap，根據start與end
    const maxStartHeap = new Heap([], null, (a, b) => a[0] - b[0]);
    const maxEndHeap = new Heap([], null, (a, b) => a[0] - b[0]);

    const result = Array(n).fill(0);

    for (let endIndex = 0; endIndex < n; endIndex++) {
        maxStartHeap.push([intervals[endIndex].start, endIndex]);
        maxEndHeap.push([intervals[endIndex].end, endIndex]);
    }

    // 每個end去找start
    for (let i = 0; i < n; i++) {
        const [topEnd, endIndex] = maxEndHeap.pop();
        result[endIndex] = -1;

        // 找到start <= topEnd為止，存startIndex在result中
        if (maxStartHeap.peek()[0] >= topEnd) {
            let [topStart, startIndex] = maxStartHeap.pop();
            while (maxStartHeap.length > 0 && maxStartHeap.peek()[0] >= topEnd) {
                [topStart, startIndex] = maxStartHeap.pop();
            }

            result[endIndex] = startIndex;

            //把剛剛最後的元素放回去，因為可能是其他區間要用的
            maxStartHeap.push([topStart, startIndex]);
        }
    }
    return result;
}


let result = find_next_interval(
    [new Interval(2, 3), new Interval(3, 4), new Interval(5, 6)])
console.log(`Next interval indices are: ${result}`)

result = [];
result = find_next_interval(
    [new Interval(3, 4), new Interval(1, 5), new Interval(4, 6)])
console.log(`Next interval indices are: ${result}`)