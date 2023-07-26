/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    const tokens = sentence.trim().split(/\s+/)
    let result = 0
    console.log(tokens)
    
    for (const token of tokens) {
        if (validToken(token)) result++
    }
    
    return result
};

const validToken = token => {
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const punctuation = ["!", ".", ","]
    let hyphen = 0
    let prevChar = null
    let numOfPunctuation = 0
    console.log(token)
    for (let i = 0; i < token.length; i++) {
        const char = token[i]

        if (digits.includes(char)) return false
        if (char === "-") {
            if (hyphen > 0 || prevChar === null || i === token.length - 1 || digits.includes(token[i + 1]) || punctuation.includes(token[i + 1])) {
                return false                
            } else {
                hyphen++
            } 
        }
        
        if (punctuation.includes(char) && i !== token.length - 1) return false
        
        prevChar = char
    }
    
    console.log(token)
    return true
}