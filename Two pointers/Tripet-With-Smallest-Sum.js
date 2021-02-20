/**
 * 
 *  想法：
 *      1. 先排序
 *      2. 感覺比其他tripet更簡單
 * 
 */

const triplet_with_smaller_sum = function (arr, target) {
    arr.sort((a,b) => a-b)
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        count += search_smaller_pair(arr.slice(i+1, arr.length), arr[i], target)
    }
    return count;

};

const search_smaller_pair = (subArr, firstEle, target) => {
    let count = 0, left = 0, right = subArr.length-1
    while (left < right) {
        let sum = firstEle + subArr[left] + subArr[right]
        if (sum < target) {
            count += right-left
            left += 1;
        } else {
            right -= 1
        }
    }
    return count
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

/**
 *   Learned:
 *      1. 原本把條件想得太複雜了，發現code會太複雜，就要從頭再想一次
 */