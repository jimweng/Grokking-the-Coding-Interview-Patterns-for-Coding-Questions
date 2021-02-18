/**
 *   想法：無法知道最靠近0的元素在哪個位置，所以先push進array，再reverse
 * 
 */

function make_squares(arr) {
    let left = 0, right = arr.length - 1, answer = []

    while(left <= right) {
        let leftSquare = arr[left] * arr[left], rightSquare = arr[right] * arr[right]

        if (leftSquare > rightSquare) {
            answer.push(leftSquare)
            left += 1
        } else  {
            answer.push(rightSquare)
            right -= 1
        }  
    }
    return answer.reverse()
}

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

/**
 *  Learned:
 *      1. 解答用Array(n).fill(0)，產生一個array，再由最大元素開始填入。可以考慮看看
 */