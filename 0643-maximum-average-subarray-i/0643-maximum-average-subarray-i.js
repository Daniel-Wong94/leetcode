/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {    
    let sum = 0
    let result = 0
    
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    
    result = sum
    
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]

        result = Math.max(result, sum)        
    }
    
    return result / k
};