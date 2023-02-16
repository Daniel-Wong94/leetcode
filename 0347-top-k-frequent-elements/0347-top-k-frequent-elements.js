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
    
    const maxCounts = new Array(nums.length)
    
    for (const num in count) {
        if (!maxCounts[count[num]]) maxCounts[count[num]] = []
        maxCounts[count[num]].push(num)
    }
    
    for (let i = maxCounts.length - 1; i >= 0; i--) {
        if (result.length === k ) break;
        if (maxCounts[i]) {
            for (const num of maxCounts[i]) {
                if (result.length < k) result.push(num)
            }
        }
    }
    
    return result;
};