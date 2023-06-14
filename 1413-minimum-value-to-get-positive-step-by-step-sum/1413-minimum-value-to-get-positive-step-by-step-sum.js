/**
 * @param {number[]} nums
 * @return {number}
 */

// make a running sum and find the most negative number
// if there is no num < 1, return 0
// else return Math.abs(most negative number + 1)
var minStartValue = function(nums) {
    let min = 0
    let total = 0
    
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        min = Math.min(min, total)
    }
    
    // if min ends up to be 0, then we know all numbers were positive (> 0)
    return -min + 1
};