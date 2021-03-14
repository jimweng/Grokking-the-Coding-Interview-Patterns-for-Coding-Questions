/**
 *   想法：
 *      1. 一個array有circular代表，有超過一個元素且同一方向
 *      2. 幾次next，就是access value幾次
 *      
 */

const circular_array_loop_exists = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let isForward = arr[i] >= 0;
    let slow = i, fast = i;

    while (true) {
      // if slow or fast becomes -1, means that we can't find cycle for the number
      slow = find_next_index(arr, isForward, slow);
      fast = find_next_index(arr, isForward, fast);
      
      if (fast !== -1) {
        fast = find_next_index(arr, isForward, fast);
        // move another step for the fast pointer
      }
    

      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }
    if (slow !== -1 && slow === fast) {
      return true;
    }
  }
  return false;
};

const find_next_index = (arr, isForward, currentIndex) => {
  let direction = arr[currentIndex] >= 0;

  if (isForward !== direction) return -1; // change the direction, return -1

  nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) {       // Handle the negative number
    nextIndex += arr.length;
  }

  if (nextIndex === currentIndex) { // Edge case: one-element cycle 
    nextIndex = -1;
  }

  return nextIndex;
}



console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`)
console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`)
console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`)

/**
 *   Learned:
 *      1. 沒有解出來: 原因是constraint沒有想清楚
 *      2. Constraints
 *        - If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement. (像Circular queue)
 *        - IF, while moving backward, we reach the beinning of the array, we will jump to the last element to continue the movement.
 *      3. If the array has a cycle. The cycle should have more than one element and should follow one direction which means "the cycle should not contain both forward and backward movements".
 *      4. Solutions: 
 *        - As the point 3, we will handle this by remembering the direction of each element while searching for the cycle.
 *      5. Thinking
 *        - 因為不知道元素會怎麼travel, 最差狀況就是每個走一次
 *      6. Improve
 *        - 如果有存visited numbers, O(N)
 * 
 */