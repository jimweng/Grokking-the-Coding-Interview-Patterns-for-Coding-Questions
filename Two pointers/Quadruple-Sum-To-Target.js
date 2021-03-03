/**
 *  想法： unsorted array, find all unique quadruplets equals to the target number
 *        前面做這個的時候，排好序，然後移動。現在多用一個pointer來跑。複雜度O(N^3)
 */
function search_quadruplets(arr, target) {
    let quadruple = []
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            find_pairs(arr.slice(j+1, arr.length), target, arr[i], arr[j], quadruple)
        }
    }
    return quadruple

}

function find_pairs(subArr, target, first_element, second_element, quadruple) {
    let tempSum = target - first_element - second_element,
        left = 0, right = subArr.length-1
    
        while(left < right) {
            let sum = tempSum - subArr[left] -subArr[right]
            if (sum > 0) {
                right -= 1
            } else if (sum === 0) {

                quadruple.push([first_element, second_element, subArr[left], subArr[right]])

                // 看答案
                left+=1
                right-=1
                if (sum > 0) {
                    right -= 1
                } else if (sum === 0) {
                    quadruple.push([first_element, second_element, subArr[left], subArr[right]])
                } else {
                    left += 1
                }
                //return;
            } else {
                left += 1
            }
        }

}

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));