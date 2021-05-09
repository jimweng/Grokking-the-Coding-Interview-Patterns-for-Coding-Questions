/**
 *  想法：
 *      1. 直接cyclic-sort
 */

const find_duplicate = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let j = nums[i] - 1;
        if ( nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }

    for (let k=0; k<nums.length; k++) {
        if (nums[k] !== k+1) {
            return nums[k];
        }
    }
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));