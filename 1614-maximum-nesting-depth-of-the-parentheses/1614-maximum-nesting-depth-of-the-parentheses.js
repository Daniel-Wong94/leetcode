/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    // s is guaranteed to be a valid VPS
    let current = 0
    let maxNest = 0
    
    for (const c of s) {
        if (c === "(") current++
        if (c === ")") current--
        
        maxNest = Math.max(maxNest, current)
    }
    
    return maxNest;
};