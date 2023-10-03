/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const freq = {}
    let result = 0
    
    for (const num of nums) {
        result += freq[num] || 0
        freq[num] = freq[num] + 1 || 1
    }
    
    return result
};