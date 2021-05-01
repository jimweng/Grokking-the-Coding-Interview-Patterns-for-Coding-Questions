/**
 *  想法：
 *      1. [start_time, end_time, load]
 *      2. Goal is to find the maximum CPU load
 *      3. 基於Minimum-Meeting room 用MinHeap，往下
 * 
 */

const Heap = require('collections/heap'); 

class Job {
    constructor(start, end, cpu_load) {
      this.start = start;
      this.end = end;
      this.cpu_load = cpu_load;
    }
  };
  
  const find_max_cpu_load = function(jobs) {
    let max_job_load = 0, load = 0, minHeap = new Heap([], null, ((a,b) => b.end - a.end));
    // 1. sort the job intervals by start_time
    jobs.sort((a,b) => a.start - b.start);

    // 2. maintain a heap, and calculate the workload
    for (let i = 0; i < jobs.length; i++) {
        while(minHeap.length && jobs[i].start >= minHeap.peek().end) {
            load -= minHeap.pop().cpu_load;
        }
        minHeap.push(jobs[i]);

        // Calculate max job load
        load += jobs[i].cpu_load;
        max_job_load = Math.max(load, max_job_load);
    }

    return max_job_load;
  };
  
  
  console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
        [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
  console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
        [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
  console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
        [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)
  