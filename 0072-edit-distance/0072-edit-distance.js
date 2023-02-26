/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    return _minDistance(word1, word2)
};

const _minDistance = (word1, word2, idx1 = word1.length, idx2 = word2.length, memo = {}) => {
    const key = `${idx1} , ${idx2}`
    if (key in memo) return memo[key];
    
    /// base case: if either of the words are empty, then the min number of operations would be the number of chars left for insertion
    if (idx1 === 0) return idx2
    if (idx2 === 0) return idx1
    
    // if the chars are the same, then move both pointers over
    if (word1[idx1 - 1] === word2[idx2 - 1]) return _minDistance(word1, word2, idx1 - 1, idx2 - 1, memo)
    else {
        // no need to rebuild the strings, just move the pointers for each operation
        const insertChar = _minDistance(word1, word2, idx1, idx2 - 1, memo)
        const deleteChar = _minDistance(word1, word2, idx1 - 1, idx2, memo)
        const replaceChar = _minDistance(word1, word2, idx1 - 1, idx2 - 1, memo)
        
        memo[key] = Math.min(insertChar, Math.min(deleteChar, replaceChar)) + 1
        return memo[key]
    }
}