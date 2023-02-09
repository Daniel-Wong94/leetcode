/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // count the chars of ransom note
    // deduct from magazine, if any letters are left, then false
    
    const charCount = {}
    
    for (const char of ransomNote) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1
    }
    
    for (const char of magazine) {
        if (char in charCount) charCount[char]--
    }
    
    for (const char in charCount) {
        if (charCount[char] > 0) return false;
    }
    
    return true;
};