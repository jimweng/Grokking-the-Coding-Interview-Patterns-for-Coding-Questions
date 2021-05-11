/**
 *  想法：
 *      1. 原本想像跟cyclic sort一樣，但看了測資發現有：「0, 負數, 大於array長度的數字」等edge case
 * 
 */

const find_first_smallest_missing_positive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        let j = nums[i] - 1;
        if ((nums[i] !== nums[j]) && (nums[i] > 0)) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }

    for (let k=0;k< nums.length; k++) {
        if (nums[k]-1 !== k) {
            return k+1;
        } 
    }
    return -1;
};

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));