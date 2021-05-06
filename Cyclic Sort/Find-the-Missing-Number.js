/**
 *   想法：
 *      1. 先cyclic sort 排好，然後從頭掃到尾
 *      2. 觀察到Array.length會小於實際最大數字，n numbers out of the total n+1 numbers
 *
 */

const find_missing_number = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};
console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
/**
 *   心得：
 *      1. 不要一開始就想要增加空間，以in-place swap 為優先考慮
 *      2. 不增加空間下，第一個例子，最後是[0, 1, 4, 3]，也就是說 n+1的那個數會在缺少的那個位置
 * 
 */