/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a- b)
    let operations = 0
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
        const sum = nums[left] + nums[right]
        
        if (sum > k) {
            right--
        } else if (sum < k) {
            left++
        } else {
            operations++
            left++
            right--
        }
    }
    
    return operations
};