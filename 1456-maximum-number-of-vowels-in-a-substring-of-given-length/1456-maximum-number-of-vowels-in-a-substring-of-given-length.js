/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const VOWELS = "aeiou"
    
    let maxStreak = 0
    let streak = 0
    
    for (let i = 0; i < k; i++) {
        if (VOWELS.includes(s[i])) streak++
    }
    
    maxStreak = streak
    
    for (let i = k; i < s.length; i++) {
        if (VOWELS.includes(s[i - k])) {
            streak--
        }
        
        if (VOWELS.includes(s[i])) {
            streak++
        }

        maxStreak = Math.max(maxStreak, streak)
    }
    
    return maxStreak
};