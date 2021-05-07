/**
 * 想法：
 *      1. 跟find the missing Number 一樣，但會有重複的數字在裡面
 */

const find_missing_numbers = function(nums) {
    missingNumbers = [];
    let i = 0;
    while (i<nums.length) {
        const j = nums[i]-1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j+1) {
            missingNumbers.push(j+1)
        }
    }


    return missingNumbers;
  };

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
console.log(find_missing_numbers([2, 3, 2, 1]));