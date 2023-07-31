/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0
    let max = nums[0]
    
    for (let i = 0; i < nums.length; i++) {
        let curr = 1
        for (let j = i; j < nums.length; j++) {
            curr *= nums[j]
            max = Math.max(max, curr)
        }
    }
    
    return max
};