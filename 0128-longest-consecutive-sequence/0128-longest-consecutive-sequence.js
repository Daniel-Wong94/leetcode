/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    
    const visited = new Set(nums)
    const subs = {}
    
    // find the start of each subsequence
    for (const num of nums) {
        if (!visited.has(num - 1)) {
            subs[num] = 1
        }
    }
        
    // for each sub, loop through the nums and check for consecutives
    for (const sub in subs) {
        let consecutive = Number(sub) + 1
        while (visited.has(consecutive)) {
            subs[sub]++
            consecutive++
        }
    }
    
    return Math.max(...Object.values(subs));
};