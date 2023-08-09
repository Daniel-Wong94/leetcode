/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU"
    const chars = s.split("")
    const swaps = []
    
    for (const char of chars) {
        if (vowels.includes(char)) {
            swaps.push(char)
        }
    }
    
    for (let i = 0; i < chars.length; i++) {
        if (vowels.includes(chars[i])) {
            chars[i] = swaps.pop()
        }
    }
    
    return chars.join("")
};