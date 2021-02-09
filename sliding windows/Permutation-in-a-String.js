/**
 * 想法：先由string的頭開始搜尋，當發現與pattern中有字母相同，就繼續往下找，沒有就pass
 *      複雜度就在於pattern的長度
 */

const find_permutation = (str, pattern) => {
    let strStart = 0, strEnd = str.length, patternList = [], checkList = [], checkFlag = false

    // 先創hashMap
    for (let i = 0; i < pattern.length; i++) {
        if (!patternList[pattern[i]]) {
            patternList[pattern[i]] = 1
        } else {
            patternList[pattern[i]] += 1
        }
    }

    checkList = Object.assign([], patternList)

    while (strStart < strEnd) {
        //若相同，繼續往下看
        //若不同，回復原狀，繼續往下看

        if (str[strStart] in checkList) {
            checkFlag = true
            checkList[str[strStart]] -= 1
            if (checkList[str[strStart]] === 0) {
                delete checkList[str[strStart]]
                if (Object.keys(checkList).length === 0) {
                    return true;
                }
            }
            
        } else if (checkFlag && !(str[strStart] in patternList)) {
            checkList = Object.assign([], patternList)
            checkFlag = false
        }
        
        strStart += 1
    }

    if (Object.keys(checkList).length === 0) {
        return true;
    }

    return false;
}

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);

/**
 *  Learned:
 *      查找HashMap: Object.keys(Array)
 *      Deep Clone: Object.assign([], Array)
 *      
 */