/**
 * 
 *  想法：
 *      1. 只要發現會產生cycle，就代表無法達到happy number
 *      2. 依照statement，必須紀錄過去的值 => hashmap or list
 */

const find_happy_number = function (num) {
    const iterations = [num]
    let sum = num
    while (true) {
        sum = square_every_digit(sum)

        if (sum === 1) {
            return true
        } else if (iterations.includes(sum)) {
            return false
        } 
        iterations.push(sum)
    }
};

const square_every_digit = (num) => {
    let result = 0
    while (num > 0) {
        result += (num % 10) * (num % 10)
        num = parseInt(num / 10)
    }
    return result
}

/**
 *    solutions: 使用fast-slow方法，自己目前看起來也沒有比較快
 * 
 */

function find_happy_number(num) {
    let slow = num,
        fast = num;
    while (true) {
        slow = square_every_digit(slow); // move one step
        fast = square_every_digit(square_every_digit(fast)); // move two steps
        if (slow === fast) { // found the cycle
            break;
        }
    }
    return slow === 1; // see if the cycle is stuck on the number '1'
}


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)

/**
 *  Learned:
 *      1. If the number N is less than or equal 1000, we at most 1001 steps to reach the cycle or '1' 
 *      2. N1 (the next number) < 9^2 M
 *          2.1 M = log(N + 1)
 *          2.2 N1 = O(logN)
 */