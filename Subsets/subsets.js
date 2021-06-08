/**
 *  此類問題用BFS解，第一次直接看答案
 * 
 *  
 * 
 */

const find_subsets = function(nums) {
    const subsets = [];

    // start by adding empty subset
    subsets.push([]);
    for (let i = 0; i < nums.length; i++) {
        const n = subsets.length;
        for (let j = 0; j < n; j++) {
            const currentSubset = subsets[j].slice(0);
            currentSubset.push(nums[i]);
            subsets.push(currentSubset);
        }
    }

    return subsets;
  };
  
  
  console.log('Here is the list of subsets: ');
  let result = find_subsets([1, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });
  
  console.log('Here is the list of subsets: ');
  result = find_subsets([1, 5, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });