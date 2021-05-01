const Heap = require('collections/heap'); //http://www.collectionsjs.com

class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

/**
 *   Fully overlap （Ex. [1,4], [2,3] ）的情境沒考慮到，所以看解答
 */

// const min_meeting_rooms = function (meetings) {
//     // sort the start time first
//     meetings.sort((a, b) => a.start - b.start);

//     let rooms = 1, front = 0, pointer = 1, maxRooms = 0;
//     while (front < meetings.length - 1) {
//       let a_overlap_b = (meetings[pointer].start < meetings[front].end) && (meetings[pointer].start > meetings[front].start)
//       let a_fully_overlap_b = (meetings[front].start <= meetings[pointer].start) && (meetings[front].end >= meetings[pointer].end);
//       let b_fully_overlap_a = (meetings[pointer].start <= meetings[front].start) && (meetings[pointer].end >= meetings[front].end);
//       if (a_overlap_b || a_fully_overlap_b || b_fully_overlap_a) {
//         console.log('a_overlap_b, a_fully_overlap_b, b_fully_overlap_a: ', a_overlap_b, a_fully_overlap_b, b_fully_overlap_a);
//         rooms += 1;
//       }

//       if (pointer < meetings.length-1) {
//         pointer++;
//       } else {
//         front++;
//         pointer = front + 1;
//         if (rooms > maxRooms) {
//           maxRooms = rooms;
//         }
//         rooms = 1;
//       }
//     }
//     return maxRooms;
//   };

const min_meeting_rooms = function (meetings) {

    // 1. sort based on start_time
    meetings.sort((a, b) => a.start - b.start);

    // 2. keep track of the endtime of all meetings currently happening
    //    , so MinHeap would fit the requirement
    // Heap(values, equals, compare)
    // new Heap().peek()  returns the value at the beginning of a collection.
    let minRooms = 0, minHeap = new Heap([], null, ((a, b) => b.end - a.end));
    for (let i = 0; i < meetings.length; i++) {
        while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
            minHeap.pop();
        }
        minHeap.push(meetings[i]);
        minRooms = Math.max(minRooms, minHeap.length);
    }

    return minRooms;
}

console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`);
console.log(`Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);