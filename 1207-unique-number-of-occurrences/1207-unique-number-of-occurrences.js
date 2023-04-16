/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counter = {}
    
    for (const num of arr) {
        counter[num] = counter[num] + 1 || 1
    }
    
    const counts = Object.values(counter)
    
    return new Set(counts).size === counts.length
};