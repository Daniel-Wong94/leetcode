/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.wordsDict = wordsDict
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let [i1, i2] = [-1, -1]
    let min = this.wordsDict.length
    
    for (let i = 0; i < this.wordsDict.length; i++) {
        const word = this.wordsDict[i]
        
        if (word === word1) i1 = i
        if (word === word2) i2 = i
        
        if (i1 > -1 && i2 > -1) {
            min = Math.min(min, Math.abs(i1 - i2))
        }
    }
    
    return min
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */