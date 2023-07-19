/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

// map out the index of the alien alphabet
// check adjacent words and check against their chars
// return false once the next word's char index is greater than curr word
var isAlienSorted = function(words, order) {
    const index = {}
    
    for (let i = 0; i < order.length; i++) {
        index[order[i]] = i 
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        const currWord = words[i]
        const nextWord = words[i + 1]
        
        let j = 0
        while (j < currWord.length && j < nextWord.length) {
            console.log(j)
            const currChar = currWord[j]
            const nextChar = nextWord[j]
            
            if (index[currChar] > index[nextChar]) return false
            if (index[currChar] < index[nextChar]) break;
            
            j++
        }
        
        if (j === nextWord.length && j < currWord.length) return false
    }
    
    return true;
};