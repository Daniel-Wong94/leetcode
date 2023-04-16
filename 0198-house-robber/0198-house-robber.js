/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i = 0, memo = {}) {
    if (i in memo) return memo[i]
    if (i >= nums.length) return 0
    let sum = 0 
    
    const attempt1 = nums[i] + rob(nums, i + 2, memo)
    const attempt2 = rob(nums, i + 1, memo)
    
    sum += Math.max(attempt1, attempt2)
    memo[i] = sum
    return memo[i];
};