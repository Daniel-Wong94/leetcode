/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    // if nums only has 1 element, the max and min will always be that same element
    if (nums.length === 1) return 0
    
    // minimize the max and maximize the min with k
    const max = Math.max(...nums) - k
    const min = Math.min(...nums) + k
    
    // if the diff is within 2*k, then return 0
    return Math.max(0, max - min)
};