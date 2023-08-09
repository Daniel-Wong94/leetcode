/**
 * @param {number[]} nums
 * @return {number}
 */

// get the total of the right side of the index
// iterate and move the pivot point to the right
// each iteration: add the nums[i] to leftSum first
// then check if left === right
// lastly subtract nums[i] from rightSum
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