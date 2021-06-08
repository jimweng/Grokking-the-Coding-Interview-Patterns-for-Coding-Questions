/**
 *   想法：
 *      1. 藉由上一個subsets的解法，想辦法排除duplicate的subsets
 *      2. 想到要先sort，但是endIndex沒有想到
 * 
 */

const find_subsets = function(nums) {
    const subsets = [];
    subsets.push([]);
    nums.sort((a,b) => a - b);
    let startIndex = 0, endIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        startIndex = 0;
        if (i >0 && nums[i] === nums[i-1]) {
            startIndex = endIndex + 1;
        }

        endIndex = subsets.length - 1;
        for (let j = startIndex; j < endIndex + 1; j++) {
            const currentSubset = subsets[j].slice(0);
            currentSubset.push(nums[i]);
            subsets.push(currentSubset);
        }
    }
    return subsets;
  };
  
  
  console.log('Here is the list of subsets: ');
  let result = find_subsets([1, 3, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });
  
  console.log('Here is the list of subsets: ');
  result = find_subsets([1, 5, 3, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });