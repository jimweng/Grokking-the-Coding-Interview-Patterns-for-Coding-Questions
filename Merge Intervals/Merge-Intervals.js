/**
 *    想法：
 *       1. 找出的區間，排除重疊的部分
 *       2. 經由hint，先把start進行排序，之後再進行merge   
 */

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}


const merge = function (intervals) {
    let mergedInterval = []

    if (intervals.length < 2) return intervals; // edge case

    intervals.sort((a, b) => a.start - b.start); // 先排start大小

    let start = intervals[0].start, end = intervals[0].end;
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i]
        if (interval.start <= end) {                         // overlapping 因為 前者的end大於後者的start
            end = Math.max(interval.end, end);
        } else {
            mergedInterval.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }

    mergedInterval.push(new Interval(start, end))

    return mergedInterval;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
