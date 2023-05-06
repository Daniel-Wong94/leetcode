/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let result = Math.floor((high - low) / 2)
    
    if (low % 2 === 0 && high % 2 === 0) {
        return result
    } else {
        return result + 1
    }
};