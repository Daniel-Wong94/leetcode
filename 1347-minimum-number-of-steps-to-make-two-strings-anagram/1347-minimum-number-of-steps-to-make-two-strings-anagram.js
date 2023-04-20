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
        c in count ? count[c]-- : count[c] = -1
    }
    
    // add up the diff (abs) and divide by 2
    let diff = 0
    
    Object.values(count).forEach(num => diff += Math.abs(num))
    
    return diff / 2
};