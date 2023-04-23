/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const stack = []
    let maxNest = -Infinity
    
    for (const c of s) {
        if (c === "(") stack.push(c)
        if (c === ")") stack.pop()
        
        maxNest = Math.max(maxNest, stack.length)
    }
    
    return maxNest;
};