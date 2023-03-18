/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    
    const visited = new Set(nums)
    const subs = {}
    let max = -Infinity
    
    // find the start of each subsequence
    for (const num of nums) {
        if (!visited.has(num - 1)) {
            subs[num] = 1
        }
    }
        
    // for each subsequence, lookup set for consecutives
    for (const sub in subs) {
        let consecutive = Number(sub) + 1
        let count = 1
        
        while (visited.has(consecutive)) {
            // subs[sub]++
            consecutive++
            count++
        }
        
        max = Math.max(max, count)
    }
    
    return max;
};