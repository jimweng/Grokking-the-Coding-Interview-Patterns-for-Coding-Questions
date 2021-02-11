/**
 *   前提：should not use extra space. Remove the duplicate in-place
 *   in-place : quick sort
 * 
 */

function remove_duplicates(arr) {

    let nextNonDuplicate = 1, i = 1;
    while (i < arr.length ) {
        /**
         *   若是相同pointerTwo就往後移到不一樣為止，然後in-place replace
         *   換完後，從下一個開始往後
         */

        if ( arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i]
            nextNonDuplicate += 1
        }
        i += 1
    } 
    
    return nextNonDuplicate
}


console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

/**
 *  Learned:
 *      1. in-place replace 不代表一定要做swap。只要想回傳的部分維持好就好
 *      2. 需要再熟悉pointer
 */