/**
 * @param {number[]} nums
 * @return {number}
 */

// since we can gaurantee that the low score will always be zero (replace with same number)
// we can just focus on minimizing the high score
// three scenarios of deciding which positions to replace:
// replace the min and max - check second max - second min
// replace the two lowest min - check max - third min
// replace the two largest max - check third max - min
var minimizeSum = function(nums) {
    const n = nums.length;
    
    nums.sort((a, b) => a - b)
    
    const minAndMax = nums[n - 2] - nums[1]
    const twoMins = nums[n - 1] - nums[2]
    const twoMaxes = nums[n - 3] - nums[0]
    
    
    return Math.min(minAndMax, twoMins, twoMaxes)
};