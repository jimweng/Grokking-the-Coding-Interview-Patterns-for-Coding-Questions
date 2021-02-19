/**
 *   想法：
 *      1. twoPointer ->先創造sorted Array
 *      2. 正負是否需要考慮？
 */

const triplet_sum_close_to_target = function(arr, target_sum) {
    arr.sort((a,b) => a-b)
    let real_sum = Infinity
    for (let i = 0; i < arr.length-2; i++) {
        real_sum = search_pairs(arr.slice(i+1, arr.length), arr[i], target_sum, real_sum)
    }

    return real_sum
};

const search_pairs = (subArr, firstEle, target_sum, real_sum) => {
    for (let left = 0; left < subArr.length -1 ; left++) {
        for (let right = left+1; right < subArr.length; right++) {
            let distance = Math.abs(subArr[left] + subArr[right] + firstEle - target_sum)
            if (distance === 0) {
                return subArr[left] + subArr[right] + firstEle
            }
            if (distance < Math.abs(real_sum-target_sum)) {
                real_sum = subArr[left] + subArr[right] + firstEle
            } 
        }
    }
    return real_sum
}



console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

/**
 *   Learned:
 *          1. 變數名稱要好好取，被卡很久Math.abs(real_sum-target_sum)
 *          2. search_pairs複雜度就是O(N^2)，透過這個方式試著接近O(N^2 / 2)
 *          3. tripet基本上都會是pairs的變化型，記住此點，就可以只記得少量解題方法
 * 
 */