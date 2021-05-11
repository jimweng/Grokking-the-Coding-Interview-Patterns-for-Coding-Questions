/**
 *    想法：
 *      1. 先試著直接用Cyclic Sorting再看看
 *      2. 觀察測資發現，k有可能大於實際存在於list中的數字
 *      3. 觀察測資發現，k有可能小於所以missing positive，要pass
 * 
 */

const find_first_k_missing_positive = function (nums, k) {
  let missingNumbers = [], i = 0;

  while(i< nums.length) {
      let j = nums[i] - 1;
      if (nums[i] !== nums[j] && (nums[i] > 0)) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        i++;
      }
  }

  for (let l = 0; l < nums.length; l++) {
    if (nums[l] !== l + 1 && missingNumbers.length < k) {
      missingNumbers.push(l+1);
    }
  }

  // 加入缺少的k
  let missingLength = missingNumbers.length
  while (missingLength < k) {
    let number = nums.length+(k-missingLength);
    missingNumbers.push(number);
    missingLength++;
  }
  
  return missingNumbers;
};

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([-2, -3, 4], 2));
