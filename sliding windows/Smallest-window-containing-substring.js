/**
 *   想法：要回傳最短的substring，就必須建立真正的sliding window
 * 
 */

function find_substring(str, pattern) {
    let strStart = 0, strEnd = 0, patternList = [], checkList = [],
        miniSubstring = '', miniLength = Infinity;

    // copy the patternList
    for (let i = 0; i < pattern.length; i++) {
        if (!patternList[pattern[i]]) {
            patternList[pattern[i]] = 1
        } else {
            patternList[pattern[i]] += 1
        }
    }

    checkList = Object.assign([], patternList)

    while (strStart <= str.length && strEnd <= str.length) {
        if (str[strEnd] in checkList) {
            checkList[str[strEnd]] -= 1
            if (checkList[str[strEnd]] === 0) {
                delete checkList[str[strEnd]]
            }
        }

        if (Object.keys(checkList).length === 0) {
            if (miniLength > (strEnd - strStart + 1)) {
                miniLength = strEnd - strStart + 1
                miniSubstring = str.slice(strStart, strEnd + 1)
            }
            checkList = Object.assign([], patternList)
            strStart += 1
            strEnd = strStart
        } else {
            if (strEnd === str.length && strStart !== str.length) {
                checkList = Object.assign([], patternList)
            }
            strEnd += 1
        }

    }

    return miniSubstring
}

console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));

/**
 *  Learned:
 *      1. 本來想過用一個變數維持string，用string.length來維護
 *         ，但是沒辦法，因為要設定無限大的string太耗記憶體，所以用一個變數計算長度就好了
 */