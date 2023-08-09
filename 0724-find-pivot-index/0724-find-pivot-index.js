/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = 0
    
    for (const num of nums) rightSum += num

    let leftSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i]        
        if (leftSum === rightSum) return i        
        rightSum -= nums[i]
    }

    return -1
};