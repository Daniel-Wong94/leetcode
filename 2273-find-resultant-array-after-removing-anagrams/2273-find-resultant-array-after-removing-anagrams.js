/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const result = []
    let prevWord;
    
    for (const word of words) {
        const sortedWord = word.split("").sort().join("")
        if (prevWord === sortedWord) continue;
        
        prevWord = sortedWord
        result.push(word)
    }
    
    return result;
};