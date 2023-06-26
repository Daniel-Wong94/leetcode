/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const freq = {}
    
    for (const char of word1) {
        freq[char] = freq[char] + 1 || 1
    }
    
    for (const char of word2) {
        if (freq.hasOwnProperty(char)) {
            freq[char]--
        } else {
            freq[char] = -1
        }
    }

    for (const char in freq) {
        if (Math.abs(freq[char]) > 3) {
            return false
        }
    }
    
    return true
};