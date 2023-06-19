/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0
    let running = 0
    
    for (const g of gain) {
        running += g
        max = Math.max(running, max)
    }
    
    return max
};