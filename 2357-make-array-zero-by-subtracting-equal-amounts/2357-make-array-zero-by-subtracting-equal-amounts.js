/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const hasZero = nums.includes(0)
    const unique = new Set(nums)
    return hasZero ? unique.size - 1 : unique.size
};