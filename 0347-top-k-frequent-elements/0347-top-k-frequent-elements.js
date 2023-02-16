/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {}
    const result = []
    
    for (const num of nums) {
        if (!count[num]) count[num] = 0
        count[num]++
    }
    
    const maxCounts = Object.values(count).sort((a, b) => b - a).slice(0, k)
    
    for (const num in count) {
        if (maxCounts.includes(count[num])) {
            result.push(num)
        }
    }
    
    return result;
};