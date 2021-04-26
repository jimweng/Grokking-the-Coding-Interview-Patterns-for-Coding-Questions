/**
 *  想法：
 *      1. 先insert，再merge
 * 
 */

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const insert = function (intervals, new_interval) {
    let i = 0;
    // TODO: Write your code here

    // 先插進去，再merge
    while (i < intervals.length) {
        if (intervals[i].start > new_interval.start) {
            intervals[i].start = new_interval.start;
            intervals[i].end = Math.max(intervals[i].end, new_interval.end);
            break;
        } 
        i++;
    }

    // merge
    while (i < intervals.length - 1) {
        if (intervals[i].end > intervals[i + 1].start) {
            intervals[i].end = Math.max(intervals[i].end, intervals[i+1].end)
            intervals.pop();
        }
        i++;
     }

    return intervals;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
], new Interval(4, 6));

for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
    new Interval(1, 3),
    new Interval(5, 7),
    new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();