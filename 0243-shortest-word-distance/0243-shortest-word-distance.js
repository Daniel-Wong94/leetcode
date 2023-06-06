/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let min = Infinity
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            for (let j = 0; j < wordsDict.length; j++) {
                if (wordsDict[j] === word2) {
                    min = Math.min(min, Math.abs(i - j))
                }
            }
        }
    }
    
    return min
};