/**
 * @param {string} s
 * @return {string}
 */

// use a stack to keep track of vowels
// pop the stack to replace the chars in reverse order
var reverseVowels = function(s) {
    const VOWELS = "aeiouAEIOU"
    const chars = s.split("")
    const stack = []
    
    for (const char of chars) {
        if (VOWELS.includes(char)) {
            stack.push(char)
        }
    }
    
    for (let i = 0; i < chars.length; i++) {
        if (VOWELS.includes(chars[i])) {
            chars[i] = stack.pop()
        }
    }
    
    return chars.join("")
};