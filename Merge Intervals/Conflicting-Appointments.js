/**
 *   想法：
 *      1. 先由開始時間排序
 *      2. 再來尋找overlapped
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
  
  const can_attend_all_appointments = function(intervals) {
    // sort intervals by start time 
    intervals.sort((a,b) => a.start - b.start);

    // find is there overlapping, check i and i+1
    let i = 0;
    while(i<intervals.length - 1) {
        if (intervals[i+1].start <= intervals[i].end) return false;
        i++;
    }

    return true;
  };
  
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ])}`);
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
  ])}`);
  
  console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
  ])}`);
  