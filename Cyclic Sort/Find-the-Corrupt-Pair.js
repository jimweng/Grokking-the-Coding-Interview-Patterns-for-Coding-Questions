/**
 *  想法：
 *      1. 就是cyclic sort，只是把錯的index跟放在裡面的數字push進去
 */


function find_corrupt_numbers(nums) {
    let i = 0, result = [];
    while( i < nums.length) {
        let j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }

    for (let k = 0; k < nums.length; k++) {
        if (nums[k]-1 !== k) {
            result.push(nums[k], k+1);
        }
    }
    return result;
}

console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));