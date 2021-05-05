/**
 *  想法：
 *      1. 理解需求：sort the objects in-place
 *      2. number is from 1 to n
 */

 const cyclic_sort = function(nums) {
    let i = 0;
    while(i < nums.length) {
        const j = nums[i] - 1; // for better readability
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++;
        }
    }
    return nums;
  }
  
  
  console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
  console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
  console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)

  /**
   *  心得：
   *        1. 並非存粹的in-place sorting 然後比較index
   *        2. 當下index先換他的位置，直到當下index變成正確的值才往下走
   */