/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const count = {}
    
    for (const word of s1.split(" ")) {
        count[word] = count[word] + 1 || 1
    }
    
    for (const word of s2.split(" ")) {
        count[word] = count[word] + 1 || 1
    }
    
    const result = []
    
    for (const word in count) {
        if (count[word] === 1) result.push(word)
    }
    
    return result
};