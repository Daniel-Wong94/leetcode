/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    let [i1, i2] = [-1, -1]
    let min = wordsDict.length
    
    for (let i = 0; i < wordsDict.length; i++) {
        const word = wordsDict[i]
        
        if (word === word1 && word === word2) {
            if (i1 === -1) {
                i1 = i
            } else if (i2 === -1) {
                i2 = i
            } else {
                i1 = i2
                i2 = i
            }
        }
        else if (word === word1) i1 = i
        else if (word === word2) i2 = i
        
        if (i1 > -1 && i2 > -1) {
            min = Math.min(min, Math.abs(i1 - i2))
        }
    }
    
    return min;
};