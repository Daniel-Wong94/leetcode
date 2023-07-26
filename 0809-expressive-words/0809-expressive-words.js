/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// two pointer, one for s and the other for words[i]
// break if chars aren't equal
// if s group is >= 3 continue
// else: check if length of s group is the same as word group
var expressiveWords = function(s, words) {
    let result = 0
    
    // map out the char and it's group count for s and words
    const sMap = mapWord(s)
    const wordsMap = []
    
    for (const word of words) {
        wordsMap.push(mapWord(word))
    }
    
    for (const word of wordsMap) {
        if (compareWords(sMap, word)) result++   
    }
    
    return result
};

// returns a 2D array of [[charCount, char]]
const mapWord = word => {
    word += "!"
    const result = []
    let prevChar = null
    let streak = 0
    
    for (const char of word) {
        if (prevChar === null) {
            prevChar = char
            streak = 1
        } else if (prevChar === char) {
            streak++
        } else {
            result.push([streak, prevChar])
            prevChar = char
            streak = 1
        }
    }
    
    return result;
}

const compareWords = (word1, word2) => {
    if (word1.length !== word2.length) return false;
    
    for (let i = 0; i < word1.length; i++) {
        if (word1[i][1] !== word2[i][1]) return false
        if (word1[i][0] < 3 && word1[i][0] !== word2[i][0]) return false
        if (word1[i][0] < word2[i][0]) return false
    }
    
    return true
}