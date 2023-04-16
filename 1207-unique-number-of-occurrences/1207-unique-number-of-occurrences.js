/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counter = {}
    
    for (const num of arr) {
        counter[num] = counter[num] + 1 || 1
    }
    
    const counts = new Set(Object.values(counter))
    
    return counts.size === Object.values(counter).length
};