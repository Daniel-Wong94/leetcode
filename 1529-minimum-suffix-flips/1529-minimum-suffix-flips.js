/**
 * @param {string} target
 * @return {number}
 */

// count number of segments with repeating bits
var minFlips = function(target) {
    let prev = target[0]
    let result = prev === "1" ? 1 : 0
    
    for (let i = 1; i < target.length; i++) {
        if (prev !== target[i]) {
            prev = target[i]                
            result++
        }
    }
    
    return result
};