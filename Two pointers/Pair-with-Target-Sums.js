/**
 *  前提：sorted Array
 *  想法：比targetSum小移動pointerOne, 比targetSum大移動pointerTwo
 */

function pair_with_target_sum(arr, targetSum) { 
    let pointerOne = 0, pointerTwo = arr.length - 1

    while (pointerOne < pointerTwo) {

        let tempSum = arr[pointerOne] + arr[pointerTwo]
        if ( tempSum === targetSum) {
            return [pointerOne, pointerTwo]
        } else if (tempSum >= targetSum) {
            pointerTwo -= 1
        } else if (tempSum <= targetSum) {
            pointerOne += 1
        }
    }

    return []
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

/**
 *  Learned:
 *      在JavaScript中沒有pointer，所以改成紀錄index的變化，當作index的移動
 */