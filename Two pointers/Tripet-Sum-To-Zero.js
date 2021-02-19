/**
 *  想法：Two pointers就是要sorted array，但題目給的是unsorted array
 *       順便復習sorting algorithm
 */
const search_triplets = function(arr) {
    let triplets = [];
    arr.sort((a,b) => a-b)
  
    for (let i = 0; i < arr.length; i++) {
        if(i>0 && arr[i] === arr[i-1]) {
            continue;
        }
        search_pairs(arr.slice(i+1,arr.length) , -arr[i], triplets)
    }

    return triplets;
};

const search_pairs = function(subArr, target, triplets) {
    let pointerOne = 0, pointerTwo = subArr.length - 1
    while (pointerOne < pointerTwo) {
        let sum = subArr[pointerOne] + subArr[pointerTwo]
        if ( sum === target) {
            triplets.push([-target, subArr[pointerOne], subArr[pointerTwo]])
            pointerOne += 1
            pointerTwo -= 1
        } else if (sum < target){
            pointerOne += 1
        } else {
            pointerTwo -= 1
        }
    }
}



console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
/**
 *   Learned: 沒有自己做出來
 *      1. 需要做的事：複習排序演算法（除了Array.sort((a,b) => a-b) 需要會真正的做法）
 *      2. 排序後，跳過重複的元素增加速度
 *      3. Array.slice() 與 Array.splice()差異: slice 原Array不會被更動，splice會
 * 
 */