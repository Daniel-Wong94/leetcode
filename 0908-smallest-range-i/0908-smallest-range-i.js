/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    if (nums.length === 1) return 0
    
    const max = Math.max(...nums) - k
    const min = Math.min(...nums) + k
    
    return Math.max(0, max - min)
};