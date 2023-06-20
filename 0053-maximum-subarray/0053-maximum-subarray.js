/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSubArray = nums[0]
    let maxSubArray = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        currSubArray = Math.max(num, currSubArray + num)
        maxSubArray = Math.max(maxSubArray, currSubArray)
    }
    
    return maxSubArray
};