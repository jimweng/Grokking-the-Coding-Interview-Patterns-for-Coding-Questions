/**
 *   想法：用HashMap 建立 pattern
 */
function find_string_anagrams(str, pattern) {
    let patternList = [], strStart = 0, strEnd = str.length, 
        checkList = [], checkFlag = false, returnIndex = [];

    /** 建立 HashMap，且複製HashMap 為checkList */
    for(let i = 0; i < pattern.length; i++){
        if (!(patternList[pattern[i]] in Object.keys(patternList))) {
            patternList[pattern[i]] = 1
        } else {
            patternList[pattern[i]] += 1
        }
    }

    checkList = Object.assign([], patternList)

    /**
     *  不一樣的概念是strStart要倒退推不同長度，
     *  如果是已經達到anagrams狀態時，就退回 (pattern - 1)長度 N + 1
     *       在sliding window掃描時發現不符合條件，就退回已搜尋長度 (pattern.length - tempCount)
     */

    while(strStart < strEnd) {
        if (str[strStart] in checkList) {
            checkFlag = true
            checkList[str[strStart]] -= 1
            if (checkList[str[strStart]] === 0) {
                delete checkList[str[strStart]]
            }
            if (Object.keys(checkList).length === 0) {
                returnIndex.push(strStart-pattern.length+1)
                if (strStart < strEnd) {
                    checkList = Object.assign([], patternList)
                    strStart -= (pattern.length - 1)
                }
            }
            
        } else if( checkFlag && !(str[strStart] in checkList)) {
            const tempCount = Object.values(checkList).reduce((accumulator, currentValue) => accumulator + currentValue)
            checkList = Object.assign([], patternList)
            checkFlag = false
            strStart -= (pattern.length - tempCount)
        }

        strStart += 1
    }

    return returnIndex;
}

console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));

/**
 *  Learned: 上面的方法姑且算是sliding window少用一個變數的方法
 */