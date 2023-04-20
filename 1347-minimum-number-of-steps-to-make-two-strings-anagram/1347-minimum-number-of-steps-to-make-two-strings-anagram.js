/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // find the frequency of s' chars
    const count = {}
    
    for (const c of s) {
        count[c] = count[c] + 1 || 1
    }
    
    // deduct with t's chars
    for (const c of t) {
        count[c]--
    }
    
    // add up the positive diffs (the neg and pos vals will cancel out) 
    let diff = 0
    
    for (const char in count) {
        if (count[char] > 0) diff += count[char]
    }
    
    return diff
};