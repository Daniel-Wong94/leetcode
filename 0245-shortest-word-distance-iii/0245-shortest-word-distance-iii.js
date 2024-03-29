/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// same logic as shortest distance I, but now we have to handle if word1 === word2
// if word1 === word2 then we have to check which pointer gets updated
// situations for word1 === word2:
// first time finding a word: assign i to i1
// second time finding a word: assign i to i2
// nth time finding a word: shift i1 to where i2 was, assign i to i2
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