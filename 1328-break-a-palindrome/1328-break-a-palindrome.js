/**
 * @param {string} palindrome
 * @return {string}
 */

// if palindrome length is 1, we can't change it to non palindromic
// palindrome can have either even or odd length
// 
var breakPalindrome = function(palindrome) {
    if (palindrome.length <= 1) return ""
    
    for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {
        const char = palindrome[i]
        
        if (char !== "a") {
            return palindrome.slice(0, i) + "a" + palindrome.slice(i + 1)
        }
    }
    
    return palindrome.slice(0, -1) + "b"
};