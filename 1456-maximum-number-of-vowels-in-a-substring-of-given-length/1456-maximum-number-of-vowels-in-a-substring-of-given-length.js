/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// find the num of vowels in the window : s[0] to s[k - 1]
// as you slide the window, check if you should subtract from the streak for s[k - i]
// and check if you should add to the streak for s[i]
// keep updating the maxStreak
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