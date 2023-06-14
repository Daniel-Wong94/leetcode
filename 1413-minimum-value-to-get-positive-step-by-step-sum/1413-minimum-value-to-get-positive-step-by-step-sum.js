/**
 * @param {number[]} nums
 * @return {number}
 */

// make a running sum and find the most negative number
// if there is no num < 1, return 0
// else return Math.abs(most negative number + 1)
var minStartValue = function(nums) {
    const runningSum = []
    let min = Infinity
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            runningSum[i] = nums[i]
        } else {
            runningSum[i] = runningSum[i - 1] + nums[i]
        }
        
        min = Math.min(min, runningSum[i])
    }
    
    return min < 1 ? Math.abs(min) + 1 : 1
};