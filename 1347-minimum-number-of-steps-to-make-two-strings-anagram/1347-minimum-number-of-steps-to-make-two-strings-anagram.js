/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const count = {}
    
    for (const c of s) {
        count[c] = count[c] + 1 || 1
    }
    
    for (const c of t) {
        if (c in count) {
            count[c]--
        } else {
            count[c] = -1
        }
    }
    
    // add up the diff (abs) and divide by 2
    let diff = Object.values(count).reduce((a, b) => Math.abs(a) + Math.abs(b))
    
    return diff / 2
};