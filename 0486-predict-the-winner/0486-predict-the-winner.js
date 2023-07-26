/**
 * @param {number[]} nums
 * @return {boolean}
 */

// can't greedy method because it can lead to player2 getting a bigger score
// dp: compare sum of the left vs right decisions, choosing the max score after decision
var PredictTheWinner = function(nums) {
    
    const getWinner = (left, right) => {
        // base case: single 
        if (left > right) return 0

        const takeLeft = nums[left] - getWinner(left + 1, right)
        const takeRight = nums[right] - getWinner(left, right - 1)

        return Math.max(takeLeft, takeRight)
    }
    
    return getWinner(0, nums.length - 1) >= 0
};