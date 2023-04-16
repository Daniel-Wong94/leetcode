/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i = 0, memo = {}) {
    if (i in memo) return memo[i]
    
    // base case: exhausted all elements of the array
    if (i >= nums.length) return 0
    
    let sum = 0 
    // there's two decisions: take the first element or don't take the first element
    const attempt1 = nums[i] + rob(nums, i + 2, memo)
    const attempt2 = rob(nums, i + 1, memo)
    
    // bubble up the greater values and cache it in memo
    sum += Math.max(attempt1, attempt2)
    memo[i] = sum
    
    return memo[i];
};