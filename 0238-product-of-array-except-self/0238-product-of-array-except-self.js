/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = []
    let pre = 1
    let post = 1
    
    for (let i = 0; i < nums.length; i++) {
        result.push(pre)
        pre *= nums[i]
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= post
        post *= nums[i]
    }
    
    return result
};