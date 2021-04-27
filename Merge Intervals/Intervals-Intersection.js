/**
 *   想法：
 *      1. 因為兩個都是排序過後的，所以一個一個解決
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
  
  const merge = function(intervals_a, intervals_b) {
    let result = [], i=0, j=0;

    while(i < intervals_a.length && j < intervals_b.length) {
        // check if b.start <= a.start <= b.end
        let a_overlaps_b = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;

        // check if a.start <= b.start <= a.end
        let b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;

        if (a_overlaps_b || b_overlaps_a) {
            result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start), 
            Math.min(intervals_a[i].end, intervals_b[j].end)));
        }

        // Compare the end element of original intervals to move the intervals   
        if (intervals_a[i].end < intervals_b[j].end) {
            i += 1;
        } else {
            j+=1;
        }
    }


    return result;
  };
  
  process.stdout.write('Intervals Intersection: ');
  let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();
  
  process.stdout.write('Intervals Intersection: ');
  result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  console.log();