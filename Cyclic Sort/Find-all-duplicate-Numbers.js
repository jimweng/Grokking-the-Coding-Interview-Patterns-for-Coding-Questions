/**
 *  想法：
 *      1. 一樣cyclic sort
 */
const find_all_duplicates = function(nums) {
    let duplicateNumbers = [], i = 0;
    
    while(i<nums.length) {
        let j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }

    for (let k = 0; k < nums.length; k++) {
        if (nums[k] !== k+1) {
            duplicateNumbers.push(nums[k]);
        }
    }

    return duplicateNumbers;

  };

console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));