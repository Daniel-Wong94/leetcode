/**
 * @param {number[]} nums
 * @return {number}
 */

// make a running sum and find the most negative number
// if there is no num < 1, return 0
// else return Math.abs(most negative number + 1)
var minStartValue = function(nums) {
    let min = Infinity
    let total = 0
    
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        min = Math.min(min, total)
    }
    
    return min < 1 ? Math.abs(min) + 1 : 1
};